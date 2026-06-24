(function () {
  const KEY = "cms_shared_workflow_v1";
  const initial = { orders: [], orderUpdates: {}, results: [], resultUpdates: {}, clinicalNotes: {}, notifications: [], audit: [] };
  const read = () => {
    try { return { ...initial, ...JSON.parse(localStorage.getItem(KEY) || "{}") }; } catch { return structuredClone(initial); }
  };
  const write = (state) => { localStorage.setItem(KEY, JSON.stringify(state)); window.dispatchEvent(new CustomEvent("cms:data-change")); };
  const audit = (state, user, action, module, details) => state.audit.unshift({ time: new Date().toISOString(), user: user?.name || "System", role: user?.role || "Service", action, module, details, ip: "Local Demo" });
  const notify = (state, audience, title, description, type = "orders") => state.notifications.unshift({ id: `N-${Date.now()}-${Math.random().toString(16).slice(2)}`, audience, title, description, type, time: new Date().toISOString(), unread: true });
  const id = (prefix) => `${prefix}-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`;

  function createOrder(input, user) {
    const state = read();
    const order = { id: id("LAB"), patientId: input.patientId || "PT-10492", patientName: input.patientName || "Sarah Johnson", doctorId: user.id, doctorName: user.name, facility: input.facility, tests: input.tests, priority: input.priority, status: input.status || "Pending", createdAt: new Date().toISOString(), latestUpdate: "Order created" };
    state.orders.unshift(order);
    notify(state, "Laboratory Staff", "New order assigned", `${order.id} for ${order.patientName} is ready for laboratory intake.`);
    notify(state, order.patientId, "Laboratory order created", `${user.name} created ${order.id} for your care.`);
    audit(state, user, "CREATE", "Order", `Created ${order.id} for ${order.patientName}`);
    write(state);
    return order;
  }

  function updateOrderStatus(orderId, status, user) {
    const state = read();
    state.orderUpdates[orderId] = { status, updatedAt: new Date().toISOString(), updatedBy: user.name };
    const order = state.orders.find((item) => item.id === orderId);
    if (order) { order.status = status; order.latestUpdate = `${status} · just now`; }
    notify(state, order?.doctorId || "doctor-001", "Order status updated", `${orderId} is now ${status}.`);
    notify(state, order?.patientId || "PT-10492", "Order status updated", `Your order ${orderId} is now ${status}.`);
    audit(state, user, "UPDATE", "Order", `Set ${orderId} to ${status}`);
    write(state);
  }

  function uploadResult(input, user) {
    const state = read();
    const order = state.orders.find((item) => item.id === input.orderId);
    const result = { id: id("RES"), orderId: input.orderId, patientId: order?.patientId || "PT-10492", patientName: order?.patientName || "Sarah Johnson", doctorId: order?.doctorId || "doctor-001", facility: order?.facility || "Central Medical Center", test: input.test || order?.tests || "Laboratory Test", status: "Pending Review", uploadedBy: user.name, uploadedAt: new Date().toISOString(), note: input.note || "" };
    state.results.unshift(result);
    notify(state, "Laboratory Staff", "Result ready for review", `${result.id} is pending laboratory review.`, "results");
    audit(state, user, "CREATE", "Result", `Uploaded ${result.id} for ${input.orderId}`);
    write(state);
    return result;
  }

  function updateResultStatus(resultId, status, user) {
    const state = read();
    state.resultUpdates[resultId] = { status, updatedAt: new Date().toISOString(), updatedBy: user.name };
    const result = state.results.find((item) => item.id === resultId);
    if (result) result.status = status;
    audit(state, user, status === "Released" ? "RELEASE" : status === "Rejected" ? "REJECT" : "VERIFY", "Result", `${status} ${resultId}`);
    if (status === "Verified" || status === "Released") notify(state, result?.doctorId || "doctor-001", "New result available", `${resultId} is ${status.toLowerCase()} and available for review.`, "results");
    if (status === "Released") notify(state, result?.patientId || "PT-10492", "New result released", `Your laboratory result ${resultId} is now available.`, "results");
    write(state);
  }

  function addClinicalNote(resultId, note, user) {
    const state = read();
    state.clinicalNotes[resultId] = { note, doctor: user.name, addedAt: new Date().toISOString() };
    const result = state.results.find((item) => item.id === resultId);
    notify(state, result?.patientId || "PT-10492", "Clinical note added", `${user.name} added a note to result ${resultId}.`, "note");
    audit(state, user, "UPDATE", "Result", `Added clinical note to ${resultId}`);
    write(state);
  }

  function dataFor(role, user) {
    const state = read();
    const all = { ...state };
    if (role === "Admin") return all;
    if (!user) return { ...initial };
    if (role === "Doctor") return { ...all, orders: state.orders.filter((o) => o.doctorId === user.id), results: state.results.filter((r) => r.doctorId === user.id), notifications: state.notifications.filter((n) => n.audience === user.id || n.audience === role), audit: [] };
    if (role === "Laboratory Staff") return { ...all, orders: state.orders.filter((o) => !user.assignedFacility || o.facility === user.assignedFacility), notifications: state.notifications.filter((n) => n.audience === role || n.audience === user.id), audit: [] };
    return { ...all, orders: state.orders.filter((o) => o.patientId === user.patientProfileId), results: state.results.filter((r) => r.patientId === user.patientProfileId && r.status === "Released"), notifications: state.notifications.filter((n) => n.audience === user.patientProfileId || n.audience === user.id), audit: [] };
  }

  window.ClinicStore = { read, createOrder, updateOrderStatus, uploadResult, updateResultStatus, addClinicalNote, dataFor };
})();
