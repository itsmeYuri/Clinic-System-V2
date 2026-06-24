const iconPaths = {
  medical: '<path d="M10 2h4v8h8v4h-8v8h-4v-8H2v-4h8V2Z"/>',
  dashboard: '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  user: '<path d="M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/>',
  doctor: '<circle cx="12" cy="7" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2M9 15l3 3 3-3"/>',
  facility: '<path d="M3 21h18M5 21V5h14v16M9 9h2M13 9h2M9 13h2M13 13h2M10 21v-4h4v4"/>',
  test: '<path d="M9 3v6l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V3M8 3h8M7 15h10"/>',
  orders: '<path d="M9 5H6a2 2 0 0 0-2 2v13h16V7a2 2 0 0 0-2-2h-3M9 3h6v4H9zM8 12h8M8 16h5"/>',
  results: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 15l2.5 2.5L16 12"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  audit: '<path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"/><path d="M12 6v6l4 2"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4a1.7 1.7 0 0 0 1-1.6v-.2h4v.2A1.7 1.7 0 0 0 15 4a1.7 1.7 0 0 0 1.9.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
  logout: '<path d="M10 17l5-5-5-5M15 12H3M15 3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  chevron: '<path d="m7 10 5 5 5-5"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  filter: '<path d="M4 5h16M7 12h10M10 19h4"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
  eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
  edit: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15M10 11v6M14 11v6"/>',
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  arrow: '<path d="M5 12h14M14 7l5 5-5 5"/>',
  trend: '<path d="m3 17 6-6 4 4 8-9M15 6h6v6"/>',
  check: '<path d="m4 12 5 5L20 6"/>',
  alert: '<path d="M10.3 3.7 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.7a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-1.5 3a16 16 0 0 1-8.5-8.5L9 8 7 3Z"/>',
  activity: '<path d="M3 12h4l2-7 4 14 2-7h6"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16h16V8Z"/><path d="M14 2v6h6"/>',
};

function icon(name, className = "") {
  const fillIcons = ["medical"];
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" ${fillIcons.includes(name) ? "" : 'fill="none"'}>${iconPaths[name] || iconPaths.file}</svg>`;
}

document.querySelectorAll("[data-icon]").forEach((el) => { el.innerHTML = icon(el.dataset.icon); });
document.querySelectorAll("[data-icon-name]").forEach((el) => { el.insertAdjacentHTML("afterbegin", icon(el.dataset.iconName)); });
document.querySelectorAll("[data-icon-button]").forEach((el) => { el.innerHTML = icon(el.dataset.iconButton); });

const pageMeta = {
  dashboard: ["Admin Dashboard", "A clear view of clinic operations and system activity."],
  users: ["User Management", "Manage system users, roles, and access permissions."],
  facilities: ["Healthcare Facilities", "Manage clinic locations and assigned care teams."],
  tests: ["Laboratory Test Definitions", "Configure the laboratory test catalog and reference details."],
  orders: ["Laboratory Orders", "Create, manage, and track laboratory orders."],
  results: ["Results Management", "View, manage, and update test results and order statuses."],
  reports: ["Reports & Analytics", "Monitor performance, trends, and operational health."],
  audit: ["Audit Trail", "Track system activities, security events, and user actions."],
  notifications: ["Notifications", "Review alerts, updates, and action items across the clinic."],
  settings: ["Settings", "Manage your profile, security, system defaults, and permissions."],
};

const users = [
  ["Dr. Amelia Reyes", "amelia.reyes@careclinic.ph", "Doctor", "Central Medical Center", "Active", "2 min ago", "AR", "teal"],
  ["Marco Villanueva", "marco.v@careclinic.ph", "Laboratory Staff", "Northside Diagnostic", "Active", "12 min ago", "MV", "blue"],
  ["Nurse Sofia Lim", "sofia.lim@careclinic.ph", "Nurse", "Central Medical Center", "Active", "28 min ago", "SL", "purple"],
  ["Liam Santos", "liam.santos@example.com", "Patient", "Riverside Clinic", "Pending", "Never", "LS", "orange"],
  ["Dr. Gabriel Cruz", "gabriel.cruz@careclinic.ph", "Doctor", "Riverside Clinic", "Active", "1 hr ago", "GC", "blue"],
  ["Isabella Flores", "isabella.f@careclinic.ph", "Receptionist", "Westbrook Health Hub", "Inactive", "18 days ago", "IF", "pink"],
  ["Noah Mendoza", "noah.m@example.com", "Patient", "Central Medical Center", "Active", "Yesterday", "NM", "gray"],
];

const facilities = [
  ["Central Medical Center", "120 Rizal Avenue, Manila", "+63 2 8123 4567", 18, 9, "Active"],
  ["Northside Diagnostic", "48 Quezon Boulevard, Quezon City", "+63 2 8555 0192", 8, 12, "Active"],
  ["Riverside Clinic", "76 Riverside Drive, Pasig", "+63 2 8638 2140", 11, 5, "Active"],
  ["Westbrook Health Hub", "19 Westbrook Road, Makati", "+63 2 8821 9073", 7, 4, "Active"],
  ["St. Anne Community Clinic", "35 Mabini Street, Taguig", "+63 2 8462 1178", 5, 3, "Inactive"],
];

const tests = [
  ["CBC", "Complete Blood Count", "Hematology", "Whole Blood", "4 hours", "₱650.00", "Active"],
  ["CMP", "Comprehensive Metabolic Panel", "Clinical Chemistry", "Serum", "8 hours", "₱1,250.00", "Active"],
  ["LIPID", "Lipid Profile", "Clinical Chemistry", "Serum", "6 hours", "₱900.00", "Active"],
  ["TSH", "Thyroid Stimulating Hormone", "Immunology", "Serum", "24 hours", "₱1,100.00", "Active"],
  ["HBA1C", "Hemoglobin A1c", "Clinical Chemistry", "Whole Blood", "6 hours", "₱780.00", "Active"],
  ["CRP", "C-Reactive Protein", "Immunology", "Serum", "8 hours", "₱820.00", "Inactive"],
];

const orders = [
  ["LAB-2026-0842", "Maria Santos", "Central Medical Center", "Dr. Amelia Reyes", "CBC, CMP", "Urgent", "Processing", "Jun 25, 2026"],
  ["LAB-2026-0841", "Daniel Chua", "Northside Diagnostic", "Dr. Gabriel Cruz", "LIPID", "Routine", "Sample Collected", "Jun 25, 2026"],
  ["LAB-2026-0840", "Elena Garcia", "Riverside Clinic", "Dr. Amelia Reyes", "TSH, HbA1c", "High", "Pending", "Jun 25, 2026"],
  ["LAB-2026-0839", "John Mendoza", "Central Medical Center", "Dr. Rafael Tan", "CBC", "Routine", "Completed", "Jun 24, 2026"],
  ["LAB-2026-0838", "Priya Patel", "Westbrook Health Hub", "Dr. Gabriel Cruz", "CMP, CRP", "High", "Processing", "Jun 24, 2026"],
  ["LAB-2026-0837", "Lucas Wong", "Northside Diagnostic", "Dr. Rafael Tan", "HbA1c", "Routine", "Cancelled", "Jun 23, 2026"],
];

const results = [
  ["RES-260618", "LAB-2026-0839", "John Mendoza", "Complete Blood Count", "Central Medical Center", "Released", "Dr. A. Reyes", "Jun 25, 10:32 AM"],
  ["RES-260617", "LAB-2026-0838", "Priya Patel", "C-Reactive Protein", "Westbrook Health Hub", "Verified", "Marco V.", "—"],
  ["RES-260616", "LAB-2026-0838", "Priya Patel", "Metabolic Panel", "Westbrook Health Hub", "Pending", "—", "—"],
  ["RES-260615", "LAB-2026-0836", "Ana Delgado", "Lipid Profile", "Northside Diagnostic", "Rejected", "Dr. G. Cruz", "—"],
  ["RES-260614", "LAB-2026-0835", "Leo Tan", "Hemoglobin A1c", "Riverside Clinic", "Released", "Marco V.", "Jun 24, 4:18 PM"],
  ["RES-260613", "LAB-2026-0834", "Mia Lim", "Thyroid Stimulating Hormone", "Central Medical Center", "Verified", "Dr. A. Reyes", "—"],
];

const audits = [
  ["10:42:18 AM", "Dr. Amelia Reyes", "Doctor", "RELEASE", "Result", "Released result RES-260618", "192.168.1.42"],
  ["10:36:04 AM", "Marco Villanueva", "Laboratory Staff", "VERIFY", "Result", "Verified CRP result for order LAB-0838", "192.168.1.87"],
  ["10:21:33 AM", "Admin User", "Admin", "CREATE", "User", "Created account for Dr. Helena Yu", "192.168.1.10"],
  ["09:58:27 AM", "Nurse Sofia Lim", "Nurse", "UPDATE", "Order", "Updated sample collection status", "192.168.1.62"],
  ["09:44:51 AM", "Dr. Gabriel Cruz", "Doctor", "LOGIN", "Authentication", "Successful login from registered device", "10.0.0.24"],
  ["09:31:12 AM", "Admin User", "Admin", "UPDATE", "Facility", "Assigned two doctors to Riverside Clinic", "192.168.1.10"],
  ["09:12:08 AM", "Marco Villanueva", "Laboratory Staff", "REJECT", "Result", "Rejected result due to invalid sample", "192.168.1.87"],
  ["08:55:43 AM", "Admin User", "Admin", "EXPORT", "Report", "Exported monthly orders report", "192.168.1.10"],
  ["08:40:19 AM", "Isabella Flores", "Receptionist", "VIEW", "User", "Viewed patient profile PT-10492", "192.168.1.90"],
  ["08:16:02 AM", "System", "Service", "CREATE", "Notification", "Generated daily operations digest", "127.0.0.1"],
];

const notificationData = [
  ["New test result reported", "A CBC result for Maria Santos is ready for review.", "8 min ago", "results", "teal", true],
  ["High priority patient alert", "Order LAB-2026-0842 has been marked urgent.", "18 min ago", "alert", "red", true],
  ["New user registered", "Liam Santos created a patient account.", "35 min ago", "users", "blue", true],
  ["Results released successfully", "Result RES-260618 is now available to the patient.", "1 hr ago", "check", "green", false],
  ["System maintenance scheduled", "Planned maintenance starts Saturday at 11:00 PM.", "Yesterday", "settings", "orange", false],
  ["Login from new device", "An administrator login was detected from Chrome on Windows.", "Yesterday", "shield", "purple", false],
  ["Order approved", "Dr. Amelia Reyes approved order LAB-2026-0839.", "Yesterday", "orders", "teal", false],
  ["Monthly report generated", "The May 2026 operations report is ready to download.", "Jun 23", "chart", "blue", false],
];

const adminSession=window.ClinicAuth.getSession();
const sharedAdminData=window.ClinicStore.dataFor("Admin",adminSession);
sharedAdminData.orders.slice().reverse().forEach(o=>{if(!orders.some(x=>x[0]===o.id))orders.unshift([o.id,o.patientName,o.facility,o.doctorName,o.tests,o.priority,o.status,new Date(o.createdAt).toLocaleDateString()]);});
sharedAdminData.results.slice().reverse().forEach(r=>{if(!results.some(x=>x[0]===r.id))results.unshift([r.id,r.orderId,r.patientName,r.test,r.facility,r.status,r.uploadedBy,r.status==="Released"?new Date(r.uploadedAt).toLocaleString():"—"]);});
sharedAdminData.audit.slice().reverse().forEach(a=>audits.unshift([new Date(a.time).toLocaleTimeString(),a.user,a.role,a.action,a.module,a.details,a.ip]));
sharedAdminData.notifications.slice().reverse().forEach(n=>notificationData.unshift([n.title,n.description,"Just now",n.type,"teal",n.unread]));
const badgeClass = (value) => {
  const map = {
    Active: "green", Inactive: "red", Pending: "orange", Verified: "green", Rejected: "red", Released: "blue",
    Processing: "purple", Completed: "green", Cancelled: "red", "Sample Collected": "teal", Routine: "gray", High: "orange", Urgent: "red",
    CREATE: "green", UPDATE: "blue", VERIFY: "teal", RELEASE: "blue", DELETE: "red", LOGIN: "purple", LOGOUT: "gray", REJECT: "red", VIEW: "gray", EXPORT: "orange",
  };
  return map[value] || "gray";
};

const badge = (value, action = false) => `<span class="badge badge-${badgeClass(value)} ${action ? "action-badge" : ""}">${value}</span>`;
const avatar = (initials, color = "teal") => `<span class="avatar avatar-${color}">${initials}</span>`;
const statusToggle = (checked = true, label = "") => `<label class="toggle"><input type="checkbox" ${checked ? "checked" : ""}><span class="toggle-track"></span>${label ? `<span>${label}</span>` : ""}</label>`;
const rowActions = (type, id, extra = "") => `<div class="row-actions"><button class="row-action" type="button" aria-label="View" data-drawer="${type}" data-record="${id}">${icon("eye")}</button><button class="row-action" type="button" aria-label="Edit" data-drawer="${type}" data-record="${id}">${icon("edit")}</button>${extra}</div>`;
const checkBox = () => `<label class="check"><input type="checkbox">${icon("check")}</label>`;

function pageHeading(title, subtitle, actions = "") {
  return `<div class="page-heading"><div><p class="eyebrow">Clinic Management System</p><h2>${title}</h2><p>${subtitle}</p></div>${actions ? `<div class="heading-actions">${actions}</div>` : ""}</div>`;
}

function statCard(label, value, iconName, change = "+8.2%", color = "teal") {
  const colors = { teal: ["#078f88", "#e6f7f5"], blue: ["#347fb7", "#e8f3fb"], purple: ["#795db0", "#f1ecfa"], orange: ["#c27a24", "#fff3e2"], red: ["#c64755", "#ffedf0"], green: ["#188363", "#e7f7ef"] };
  const [accent, tint] = colors[color] || colors.teal;
  const down = change.startsWith("-") ? "down" : change === "—" ? "neutral" : "";
  return `<article class="stat-card" style="--accent:${accent};--tint:${tint}"><div class="stat-top"><span class="stat-icon">${icon(iconName)}</span><span class="stat-change ${down}">${change !== "—" ? icon("trend") : ""}${change}</span></div><div class="stat-value">${value}</div><div class="stat-label">${label}</div></article>`;
}

function tableCard(headers, rows, footerText = "") {
  const cleanLabel = (label) => label.replace(/<[^>]*>/g, "");
  return `<section class="card table-card"><div class="table-responsive"><table class="data-table"><thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell, i) => `<td data-label="${cleanLabel(headers[i])}">${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div><div class="table-footer"><span>${footerText || `Showing ${rows.length} records`}</span><div class="pagination"><button type="button">‹</button><button class="active" type="button">1</button><button type="button">2</button><button type="button">3</button><button type="button">›</button></div></div></section>`;
}

function filterToolbar(searchPlaceholder, selects = [], primary = "", secondary = "") {
  return `<div class="toolbar"><div class="filter-group"><label class="control control-search">${icon("search")}<input type="search" data-table-search placeholder="${searchPlaceholder}"></label>${selects.map(([label, options]) => `<label class="control"><select aria-label="${label}"><option>${label}</option>${options.map((o) => `<option>${o}</option>`).join("")}</select>${icon("chevron", "select-arrow")}</label>`).join("")}</div><div class="toolbar-actions">${secondary}${primary}</div></div>`;
}

function lineChart(color = "#08a394", large = false, values = [78, 54, 62, 42, 48, 27, 35]) {
  const width = 420;
  const height = large ? 205 : 108;
  const max = Math.max(...values);
  const points = values.map((v, i) => `${(i * width) / (values.length - 1)},${height - (v / max) * (height - 18)}`).join(" ");
  const areaPoints = `0,${height} ${points} ${width},${height}`;
  return `<div class="line-chart ${large ? "big-line" : ""}" style="--chart-color:${color}"><svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none"><path class="chart-grid-line" d="M0 ${height * .25}H${width}M0 ${height * .5}H${width}M0 ${height * .75}H${width}"/><polygon points="${areaPoints}" fill="${color}" opacity=".09"/><polyline class="chart-line" points="${points}"/>${points.split(" ").map((p) => { const [x,y] = p.split(","); return `<circle class="chart-dot" cx="${x}" cy="${y}" r="3"/>`; }).join("")}</svg><div class="chart-axis">${(large ? ["Jan","Feb","Mar","Apr","May","Jun","Jul"] : ["Week 1","Week 2","Week 3","Week 4"]).map((x) => `<span>${x}</span>`).join("")}</div></div>`;
}

function donut(title, total, segments, legend, subtitle = "Current distribution") {
  return `<section class="card"><div class="card-head"><div><h3 class="card-title">${title}</h3><p class="card-subtitle">${subtitle}</p></div><button class="row-action" type="button" aria-label="More options">${icon("more")}</button></div><div class="card-body donut-layout"><div class="donut" style="--segments:${segments}"><div class="donut-center"><strong>${total}</strong><span>Total</span></div></div><div class="chart-legend">${legend.map(([name,value,color]) => `<div class="legend-row" style="--dot:${color}"><i></i><span>${name}</span><strong>${value}</strong></div>`).join("")}</div></div></section>`;
}

function renderDashboard() {
  const stats = [
    ["Total Users", "12,846", "users", "+8.2%", "teal"], ["Doctors", "328", "doctor", "+4.1%", "blue"],
    ["Patients", "11,672", "user", "+9.6%", "green"], ["Nurses", "214", "users", "+2.3%", "purple"],
    ["Laboratory Staff", "146", "test", "+6.8%", "orange"], ["Total Orders", "8,429", "orders", "+12.4%", "teal"],
    ["Active Facilities", "24", "facility", "+2", "blue"], ["Released Results", "7,186", "results", "+10.1%", "green"],
  ];
  const auditRows = audits.slice(0, 10).map((a) => [a[0], `<span class="cell-strong">${a[1]}</span>`, badge(a[3], true), `<span class="cell-wrap">${a[5]}</span>`, `<span class="cell-muted">${a[6]}</span>`]);
  return `${pageHeading("Admin Dashboard", pageMeta.dashboard[1], `<button class="btn btn-secondary" type="button" data-go-page="reports">${icon("chart")} View reports</button><button class="btn btn-primary" type="button" data-drawer="order">${icon("plus")} New order</button>`)}
    <div class="stats-grid stats-eight">${stats.map((s) => statCard(...s)).join("")}</div>
    <div class="dashboard-grid"><div class="charts-pair">
      ${donut("Users by Role", "12.8k", "#08a394 0 58%, #3e8fc5 58% 70%, #8366bc 70% 80%, #ec9b45 80% 88%, #ef7381 88% 94%, #b4c5c9 94%", [["Patients","58%","#08a394"],["Doctors","12%","#3e8fc5"],["Nurses","10%","#8366bc"],["Lab Staff","8%","#ec9b45"],["Admin","6%","#ef7381"],["Other","6%","#b4c5c9"]])}
      ${donut("Results by Status", "8,429", "#e5a23f 0 14%, #17a279 14% 38%, #d95a66 38% 43%, #397fb7 43%", [["Pending","1,180","#e5a23f"],["Verified","2,024","#17a279"],["Rejected","422","#d95a66"],["Released","4,803","#397fb7"]])}
    </div><div class="card"><div class="card-head"><div><h3 class="card-title">Latest Notifications</h3><p class="card-subtitle">Updates requiring your attention</p></div><button class="card-link" data-go-page="notifications">View all</button></div><div class="card-body notification-list">${notificationData.slice(0,4).map((n) => `<div class="notification-mini"><span class="notification-icon" style="--accent:var(--${n[4] === "red" ? "red" : n[4] === "blue" ? "blue-700" : "teal-700"});--tint:var(--${n[4] === "red" ? "red-bg" : n[4] === "blue" ? "blue-100" : "teal-50"})">${icon(n[3])}</span><div><strong>${n[0]}</strong><p>${n[1]}</p></div><time>${n[2]}</time></div>`).join("")}</div></div></div>
    <div class="mini-charts"><section class="card"><div class="card-head"><div><h3 class="card-title">Total Orders This Month</h3><p class="card-subtitle">Daily volume for June 2026</p></div><div class="metric-inline"><strong>842</strong><span>+12.4%</span></div></div><div class="card-body">${lineChart("#08a394")}</div></section><section class="card"><div class="card-head"><div><h3 class="card-title">Active Facilities</h3><p class="card-subtitle">Facilities online this month</p></div><div class="metric-inline"><strong>24</strong><span>+2</span></div></div><div class="card-body">${lineChart("#347fb7", false, [58,55,50,45,38,33,28])}</div></section></div>
    <div class="card-head" style="padding-inline:2px"><div><h3 class="card-title">Recent Audit Records</h3><p class="card-subtitle">The 10 most recent activities across the system</p></div><button class="btn btn-secondary btn-sm" type="button" data-go-page="audit">View audit trail ${icon("arrow")}</button></div>
    ${tableCard(["Time","User","Action","Details","IP Address"], auditRows, "Showing the 10 latest system activities")}`;
}

function renderUsers() {
  const rows = users.map((u, i) => [checkBox(), `<div class="table-person">${avatar(u[6],u[7])}<div><span class="cell-strong">${u[0]}</span><span class="cell-sub">@${u[1].split("@")[0]}</span></div></div>`, u[1], badge(u[2] === "Laboratory Staff" ? "Lab Staff" : u[2]), u[3], badge(u[4]), u[5], `<div style="display:flex;align-items:center;gap:8px">${rowActions("user",i)}${statusToggle(u[4] === "Active")}</div>`]);
  return `${pageHeading("User Management", pageMeta.users[1], `<button class="btn btn-primary" type="button" data-drawer="user">${icon("plus")} Add User</button>`)}
    <div class="stats-grid">${statCard("Total Users","12,846","users","+8.2%","teal")}${statCard("Active Users","12,104","check","+7.4%","green")}${statCard("Inactive Users","518","user","-2.1%","red")}${statCard("Pending Accounts","224","audit","+18","orange")}</div>
    ${filterToolbar("Search by name, email, or username", [["All roles",["Admin","Doctor","Nurse","Laboratory Staff","Receptionist","Patient"]],["All statuses",["Active","Inactive","Pending"]]], `<button class="btn btn-primary" type="button" data-drawer="user">${icon("plus")} Add User</button>`, `<button class="btn btn-secondary" type="button">${icon("filter")} Filter</button>`)}
    ${tableCard([checkBox(),"Name","Email","Role","Facility","Status","Last Active","Actions"], rows, "Showing 1–7 of 12,846 users")}`;
}

function renderFacilities() {
  const staff = (count, type) => `<div class="avatar-group">${["AR","GC","HY"].slice(0,Math.min(3,count)).map((x,i) => avatar(x,["teal","blue","purple"][i])).join("")}${count > 3 ? `<span class="avatar-more">+${count-3}</span>` : ""}</div>`;
  const rows = facilities.map((f,i) => [`<div><span class="cell-strong">${f[0]}</span><span class="cell-sub">FAC-${String(i+1).padStart(3,"0")}</span></div>`, `<span class="cell-wrap">${f[1]}</span>`, f[2], staff(f[3],"doctor"), staff(f[4],"lab"), badge(f[5]), rowActions("facility",i,`<button class="row-action" type="button" aria-label="More options">${icon("more")}</button>`)]);
  return `${pageHeading("Healthcare Facilities", pageMeta.facilities[1], `<button class="btn btn-secondary" type="button" data-drawer="assign">${icon("users")} Assign staff</button><button class="btn btn-primary" type="button" data-drawer="facility">${icon("plus")} Add Facility</button>`)}
    <div class="stats-grid">${statCard("Total Facilities","28","facility","+3","teal")}${statCard("Active Facilities","24","check","+2","green")}${statCard("Assigned Doctors","328","doctor","+4.1%","blue")}${statCard("Assigned Lab Staff","146","test","+6.8%","purple")}</div>
    ${filterToolbar("Search facilities", [["All cities",["Manila","Quezon City","Pasig","Makati","Taguig"]],["All statuses",["Active","Inactive"]]], `<button class="btn btn-primary" type="button" data-drawer="facility">${icon("plus")} Add Facility</button>`, `<button class="btn btn-secondary" type="button">Reset</button>`)}
    ${tableCard(["Facility Name","Address","Contact","Doctors Assigned","Lab Staff Assigned","Status","Actions"], rows, "Showing 1–5 of 28 facilities")}`;
}

function renderTests() {
  const rows = tests.map((t,i) => [`<span class="cell-strong" style="color:var(--teal-800)">${t[0]}</span>`, `<span class="cell-strong">${t[1]}</span>`, t[2], t[3], t[4], `<span class="cell-strong">${t[5]}</span>`, badge(t[6]), rowActions("test",i,`<button class="row-action" type="button" aria-label="Delete">${icon("trash")}</button>`)]);
  return `${pageHeading("Laboratory Test Definitions", pageMeta.tests[1], `<button class="btn btn-primary" type="button" data-drawer="test">${icon("plus")} Add Test Definition</button>`)}
    <div class="stats-grid">${statCard("Total Tests","126","test","+7","teal")}${statCard("Active Tests","119","check","+5","green")}${statCard("Categories","14","dashboard","+1","blue")}${statCard("Average Turnaround","8.4h","audit","-0.6h","purple")}</div>
    ${filterToolbar("Search by test code or name", [["All categories",["Hematology","Clinical Chemistry","Immunology","Microbiology"]],["All statuses",["Active","Inactive"]]], `<button class="btn btn-primary" type="button" data-drawer="test">${icon("plus")} Add Test Definition</button>`, `<button class="btn btn-secondary" type="button">Clear Filters</button>`)}
    ${tableCard(["Test Code","Test Name","Category","Sample Type","Turnaround Time","Price","Status","Actions"], rows, "Showing 1–6 of 126 test definitions")}`;
}

function renderOrders() {
  const rows = orders.map((o,i) => [`<span class="cell-strong" style="color:var(--teal-800)">${o[0]}</span>`, `<div class="table-person">${avatar(o[1].split(" ").map(x=>x[0]).join(""),["teal","blue","purple","orange","pink","gray"][i])}<span class="cell-strong">${o[1]}</span></div>`, o[2], o[3], `<span class="cell-wrap">${o[4]}</span>`, badge(o[5]), badge(o[6]), o[7], rowActions("order",i)]);
  return `${pageHeading("Laboratory Orders", pageMeta.orders[1], `<button class="btn btn-primary" type="button" data-drawer="order">${icon("plus")} Create Order</button>`)}
    <div class="stats-grid">${statCard("Total Orders","8,429","orders","+12.4%","teal")}${statCard("Pending Approval","184","audit","+16","orange")}${statCard("In Progress","326","activity","+8.1%","purple")}${statCard("Completed","7,919","check","+11.2%","green")}</div>
    ${filterToolbar("Search by order number, patient, or doctor", [["Date range",["Today","Last 7 days","This month"]],["All facilities",facilities.map(f=>f[0])],["All statuses",["Pending","Sample Collected","Processing","Completed","Cancelled"]]], `<button class="btn btn-primary" type="button" data-drawer="order">${icon("plus")} Create Order</button>`)}
    ${tableCard(["Order No.","Patient Name","Facility","Requesting Doctor","Ordered Tests","Priority","Status","Created Date","Actions"], rows, "Showing 1–6 of 8,429 orders")}`;
}

function renderResults() {
  const rows = results.map((r,i) => [`<span class="cell-strong" style="color:var(--teal-800)">${r[0]}</span>`, r[1], `<div class="table-person">${avatar(r[2].split(" ").map(x=>x[0]).join(""),["teal","blue","purple","orange","pink","gray"][i])}<span class="cell-strong">${r[2]}</span></div>`, `<span class="cell-wrap">${r[3]}</span>`, r[4], badge(r[5]), r[6], r[7], rowActions("result",i)]);
  return `${pageHeading("Results Management", pageMeta.results[1], `<button class="btn btn-secondary" type="button" data-go-page="reports">${icon("chart")} Results report</button>`)}
    <div class="stats-grid">${statCard("Pending Results","1,180","audit","+6.2%","orange")}${statCard("Verified Results","2,024","check","+9.7%","green")}${statCard("Rejected Results","422","close","-3.1%","red")}${statCard("Released Results","4,803","results","+10.1%","blue")}</div>
    ${filterToolbar("Search by result ID, order, patient, or test", [["All statuses",["Pending","Verified","Rejected","Released"]],["All facilities",facilities.map(f=>f[0])],["Date range",["Today","Last 7 days","This month"]]], `<button class="btn btn-secondary" type="button">${icon("filter")} Filter</button>`)}
    ${tableCard(["Result ID","Order No.","Patient","Test Name","Facility","Status","Verified By","Released Date","Actions"], rows, "Showing 1–6 of 8,429 results")}`;
}

function renderReports() {
  return `${pageHeading("Reports & Analytics", pageMeta.reports[1], `<button class="btn btn-secondary" type="button">${icon("file")} Export PDF</button><button class="btn btn-primary" type="button">${icon("download")} Download CSV</button>`)}
    <div class="tabs"><button class="tab active" type="button">Reports Overview</button><button class="tab" type="button" data-go-page="audit">Audit Trail</button></div>
    <div class="stats-grid">${statCard("Total Orders This Month","842","orders","+12.4%","teal")}${statCard("Released Results Rate","91.8%","results","+3.2%","green")}${statCard("Active Facilities","24","facility","+2","blue")}${statCard("Average Turnaround","8.4h","audit","-0.6h","purple")}</div>
    ${filterToolbar("Jun 1, 2026 — Jun 25, 2026", [["All facilities",facilities.map(f=>f[0])]], `<button class="btn btn-secondary" type="button">${icon("filter")} Filters</button>`)}
    <div class="report-grid"><section class="card report-card-wide"><div class="card-head"><div><h3 class="card-title">Orders Trend</h3><p class="card-subtitle">Monthly laboratory order count</p></div><span class="badge badge-green">+12.4% this month</span></div><div class="card-body">${lineChart("#08a394",true,[42,58,51,76,64,88,95])}</div></section>
      ${donut("Results by Status","8,429","#e5a23f 0 14%, #17a279 14% 38%, #d95a66 38% 43%, #397fb7 43%",[["Pending","14%","#e5a23f"],["Verified","24%","#17a279"],["Rejected","5%","#d95a66"],["Released","57%","#397fb7"]],"Status distribution this month")}
      ${donut("User Activity","18.2k","#08a394 0 34%, #397fb7 34% 57%, #8366bc 57% 73%, #ec9b45 73% 86%, #b4c5c9 86%",[["View","34%","#08a394"],["Create","23%","#397fb7"],["Update","16%","#8366bc"],["Verify","13%","#ec9b45"],["Other","14%","#b4c5c9"]],"Activity by action type")}
      <section class="card report-card-wide"><div class="card-head"><div><h3 class="card-title">Facility Performance</h3><p class="card-subtitle">Top facilities by completed orders</p></div><button class="card-link">View detailed report</button></div><div class="card-body bar-chart">${[["Central Medical Center",92],["Northside Diagnostic",78],["Riverside Clinic",66],["Westbrook Health Hub",51],["St. Anne Clinic",38]].map(([n,v])=>`<div class="bar-row"><span>${n}</span><div class="bar-track"><div class="bar-fill" style="width:${v}%"></div></div><strong>${v*12}</strong></div>`).join("")}</div></section>
    </div>`;
}

function renderAudit() {
  const rows = audits.map((a) => [a[0], `<span class="cell-strong">${a[1]}</span>`, badge(a[2]), badge(a[3],true), a[4], `<span class="cell-wrap">${a[5]}</span>`, `<span class="cell-muted">${a[6]}</span>`]);
  return `${pageHeading("Audit Trail", pageMeta.audit[1], `<button class="btn btn-secondary" type="button">${icon("download")} Export Log</button>`)}
    ${filterToolbar("Search audit records", [["Date range",["Today","Last 7 days","This month"]],["All users",["Admin User","Dr. Amelia Reyes","Marco Villanueva"]],["All roles",["Admin","Doctor","Nurse","Laboratory Staff"]],["All modules",["Authentication","User","Facility","Order","Result","Test Definition","Report","Notification"]],["All actions",["CREATE","UPDATE","DELETE","LOGIN","LOGOUT","VERIFY","RELEASE","REJECT","VIEW","EXPORT"]]], `<button class="btn btn-secondary" type="button">Reset</button>`)}
    ${tableCard(["Time","User","Role","Action","Module","Details","IP Address"], rows, "Showing 1–10 of 18,214 audit records")}`;
}

function renderNotifications() {
  const sections = [["Today",notificationData.slice(0,4)],["Yesterday",notificationData.slice(4,7)],["Earlier",notificationData.slice(7)]];
  return `${pageHeading("Notifications", pageMeta.notifications[1], `<button class="btn btn-secondary" type="button" data-mark-read>${icon("check")} Mark all as read</button><button class="btn btn-primary" type="button" data-go-page="settings">${icon("settings")} Notification Preferences</button>`)}
    <div class="stats-grid">${statCard("Unread Notifications","7","bell","-3","teal")}${statCard("Today’s Alerts","12","alert","+4","orange")}${statCard("System Notices","3","settings","—","blue")}${statCard("Action Required","5","audit","+2","red")}</div>
    <section class="card preference-strip"><div><h3>Notification Preferences</h3><p>Choose how you want to receive clinic alerts.</p></div>${statusToggle(true,"Email")}${statusToggle(false,"SMS")}${statusToggle(true,"In-App")}</section>
    ${filterToolbar("Search notifications", [["All types",["Results","Orders","Users","System","Security"]]], `<button class="btn btn-secondary" type="button" data-mark-read>Mark all as read</button>`)}
    <div class="notification-sections">${sections.map(([title,items])=>`<section><h3 class="notification-section-title">${title}</h3><div class="card">${items.map((n,i)=>`<article class="notification-item ${n[5] ? "unread" : ""}" data-drawer="notification" data-record="${notificationData.indexOf(n)}"><span class="notification-icon" style="--accent:var(--teal-700);--tint:var(--teal-50)">${icon(n[3])}</span><div class="notification-copy"><strong>${n[0]}</strong><p>${n[1]}</p></div><div class="notification-actions"><time>${n[2]}</time><button class="btn btn-secondary btn-sm" type="button">View</button><button class="row-action" type="button" aria-label="Mark as read">${icon("check")}</button><button class="row-action" type="button" aria-label="Open details">${icon("arrow")}</button></div></article>`).join("")}</div></section>`).join("")}</div>`;
}

function renderSettings() {
  const settingsNav = [["user","Profile"],["shield","Security"],["settings","System"],["lock","Roles & Permissions"]];
  const permissionRows = ["Admin","Doctor","Nurse","Laboratory Staff","Receptionist","Patient"].map((r,i)=>`<tr><td><strong>${r}</strong></td>${[0,1,2,3].map((_,j)=>`<td>${checkBox().replace("type=\"checkbox\"",`type="checkbox" ${(i===0 || (i<5 && j<3)) ? "checked" : ""}`)}</td>`).join("")}</tr>`).join("");
  return `${pageHeading("Settings", pageMeta.settings[1], `<button class="btn btn-primary" type="button" data-save>${icon("check")} Save Changes</button>`)}
    <div class="settings-layout"><nav class="card settings-nav">${settingsNav.map((x,i)=>`<button class="${i===0?"active":""}" type="button">${icon(x[0])}${x[1]}</button>`).join("")}</nav><div class="settings-stack">
      <section class="card settings-card"><div class="settings-card-head"><div><h3>Profile Settings</h3><p>Update your administrator profile information.</p></div><div class="avatar-upload">${avatar("AU","teal")}<button class="btn btn-secondary btn-sm" type="button">${icon("upload")} Upload avatar</button></div></div><div class="form-grid"><div class="form-field"><label>Admin name</label><input value="Admin User"></div><div class="form-field"><label>Email address</label><input type="email" value="admin@careclinic.ph"></div><div class="form-field"><label>Contact number</label><input value="+63 917 820 4621"></div><div class="form-field"><label>Job title</label><input value="System Administrator"></div></div><div style="margin-top:15px"><button class="btn btn-primary" type="button" data-save>Save Changes</button></div></section>
      <section class="card settings-card"><div class="settings-card-head"><div><h3>Security Settings</h3><p>Protect your account and review login activity.</p></div>${icon("shield")}</div><div class="setting-row"><div><strong>Change password</strong><p>Last changed 42 days ago</p></div><button class="btn btn-secondary btn-sm" type="button" data-drawer="password">Update Password</button></div><div class="setting-row"><div><strong>Two-factor authentication</strong><p>Add an extra layer of protection to your account.</p></div>${statusToggle(true)}</div><div class="setting-row"><div><strong>Login activity</strong><p>Chrome on Windows · Manila, Philippines · Active now</p></div><button class="btn btn-ghost btn-sm" type="button">View Activity</button></div></section>
      <section class="card settings-card"><div class="settings-card-head"><div><h3>System Settings</h3><p>Configure defaults for the Clinic Management System.</p></div>${icon("settings")}</div><div class="setting-row"><div><strong>Default facility</strong><p>Used when no facility is selected.</p></div><div class="control"><select><option>Central Medical Center</option>${facilities.slice(1).map(f=>`<option>${f[0]}</option>`).join("")}</select>${icon("chevron","select-arrow")}</div></div><div class="setting-row"><div><strong>Result auto-release</strong><p>Automatically release verified normal results.</p></div>${statusToggle(false)}</div><div class="setting-row"><div><strong>Notification preferences</strong><p>Email and in-app alerts are enabled.</p></div><button class="btn btn-secondary btn-sm" type="button">Manage</button></div><div class="setting-row"><div><strong>Maintenance mode</strong><p>Temporarily prevent non-admin access.</p></div>${statusToggle(false)}</div></section>
      <section class="card settings-card"><div class="settings-card-head"><div><h3>Role &amp; Permission Settings</h3><p>Control access to core clinic modules.</p></div><button class="btn btn-primary btn-sm" type="button" data-save>Save Permissions</button></div><div class="table-responsive"><table class="permission-table"><thead><tr><th>Role</th><th>Users</th><th>Orders</th><th>Results</th><th>Reports</th></tr></thead><tbody>${permissionRows}</tbody></table></div></section>
    </div></div>`;
}

const pageRenderers = { dashboard: renderDashboard, users: renderUsers, facilities: renderFacilities, tests: renderTests, orders: renderOrders, results: renderResults, reports: renderReports, audit: renderAudit, notifications: renderNotifications, settings: renderSettings };

function field(label, type = "text", placeholder = "", full = false, value = "") {
  const selectOptions = Array.isArray(type) ? `<select required><option value="">${placeholder}</option>${type.map((o)=>`<option>${o}</option>`).join("")}</select>` : type === "textarea" ? `<textarea placeholder="${placeholder}">${value}</textarea>` : `<input type="${type}" placeholder="${placeholder}" value="${value}" required>`;
  return `<div class="form-field ${full ? "full" : ""}"><label>${label}</label>${selectOptions}</div>`;
}

function userDrawer(index) {
  const u = Number.isInteger(index) ? users[index] : null;
  return `<form data-drawer-form><div class="form-section"><h3 class="form-section-title">${icon("user")} Personal information</h3><div class="form-grid">${field("Full Name","text","e.g. Dr. Helena Yu",true,u?.[0]||"")}${field("Email Address","email","name@clinic.com",true,u?.[1]||"")}${field("Contact Number","tel","+63 900 000 0000")}${field("Username","text","helena.yu")}</div></div><div class="form-section"><h3 class="form-section-title">${icon("lock")} Access information</h3><div class="form-grid">${field("Password","password","Minimum 8 characters",true)}${field("Role",["Admin","Doctor","Nurse","Laboratory Staff","Receptionist","Patient"],u?.[2]||"Select a role")}${field("Assigned Facility",facilities.map(f=>f[0]),u?.[3]||"Select a facility")}<div class="form-field full"><label>Account Status</label>${statusToggle(u ? u[4] === "Active" : true,"Active account")}</div></div></div><div class="form-actions"><button class="btn btn-secondary" type="button" data-close-drawer>Cancel</button><button class="btn btn-primary" type="submit">${u ? "Save Changes" : "Create User"}</button></div></form>`;
}

function facilityDrawer(index) {
  const f = Number.isInteger(index) ? facilities[index] : null;
  return `<form data-drawer-form><div class="form-section"><h3 class="form-section-title">${icon("facility")} Facility information</h3><div class="form-grid">${field("Facility Name","text","e.g. Eastside Care Center",true,f?.[0]||"")}${field("Address","textarea","Street, city, province",true,f?.[1]||"")}${field("Phone Number","tel","+63 2 8000 0000",false,f?.[2]||"")}${field("Email Address","email","facility@clinic.com")}<div class="form-field full"><label>Operating Status</label>${statusToggle(!f || f[5] === "Active","Facility is operating")}</div></div></div><div class="form-actions"><button class="btn btn-secondary" type="button" data-close-drawer>Cancel</button><button class="btn btn-primary" type="submit">${f ? "Save Facility" : "Create Facility"}</button></div></form>`;
}

function assignmentDrawer() {
  return `<form data-drawer-form><div class="form-section"><div class="form-grid">${field("Selected Facility",facilities.map(f=>f[0]),"Select a facility",true)}<div class="form-field full"><label>Assign Doctors</label><div class="selection-box"><span class="selection-chip">Dr. Amelia Reyes ×</span><span class="selection-chip">Dr. Gabriel Cruz ×</span><span class="selection-chip">+ Add doctor</span></div></div><div class="form-field full"><label>Assign Laboratory Staff</label><div class="selection-box"><span class="selection-chip">Marco Villanueva ×</span><span class="selection-chip">+ Add lab staff</span></div></div><div class="form-field full"><label>Facility Status</label>${statusToggle(true,"Active facility")}</div></div></div><div class="form-actions"><button class="btn btn-secondary" type="button" data-drawer="facility">Create Facility</button><button class="btn btn-primary" type="submit">Save Assignment</button></div></form>`;
}

function testDrawer(index) {
  const t = Number.isInteger(index) ? tests[index] : null;
  return `<form data-drawer-form><div class="form-section"><h3 class="form-section-title">${icon("test")} Test information</h3><div class="form-grid">${field("Test Code","text","e.g. CBC",false,t?.[0]||"")}${field("Test Name","text","Complete Blood Count",false,t?.[1]||"")}${field("Category",["Hematology","Clinical Chemistry","Immunology","Microbiology"],t?.[2]||"Select category")}${field("Sample Type",["Whole Blood","Serum","Plasma","Urine","Swab"],t?.[3]||"Select sample")}${field("Reference Range","text","e.g. 4.5–11.0 ×10⁹/L",true)}${field("Turnaround Time","text","e.g. 4 hours",false,t?.[4]||"")}${field("Price","number","0.00",false,t?.[5]?.replace(/[^0-9.]/g,"")||"")}${field("Instructions","textarea","Patient preparation or laboratory notes",true)}<div class="form-field full"><label>Availability</label>${statusToggle(!t || t[6] === "Active","Active test definition")}</div></div></div><div class="form-actions"><button class="btn btn-secondary" type="button" data-close-drawer>Cancel</button><button class="btn btn-primary" type="submit">Save Test Definition</button></div></form>`;
}

function orderDrawer(index) {
  const o = Number.isInteger(index) ? orders[index] : null;
  return `<form data-drawer-form><div class="form-section"><h3 class="form-section-title">${icon("orders")} Order information</h3><div class="form-grid">${field("Patient",["Maria Santos","Daniel Chua","Elena Garcia","John Mendoza","Priya Patel"],o?.[1]||"Search patient",true)}${field("Facility",facilities.map(f=>f[0]),o?.[2]||"Select facility")}${field("Requesting Doctor",["Dr. Amelia Reyes","Dr. Gabriel Cruz","Dr. Rafael Tan"],o?.[3]||"Select doctor")}<div class="form-field full"><label>Ordered Tests</label><div class="selection-box"><span class="selection-chip">CBC ×</span><span class="selection-chip">CMP ×</span><span class="selection-chip">+ Add test</span></div></div>${field("Priority",["Routine","High","Urgent"],o?.[5]||"Select priority")}${field("Initial Status",["Pending","Sample Collected","Processing"],o?.[6]||"Select status")}${field("Specimen Collection Date","date","",false)}${field("Time","time","",false)}${field("Notes","textarea","Clinical notes or special instructions",true)}</div></div><div class="form-actions"><button class="btn btn-secondary" type="button" data-save-draft>Save Draft</button><button class="btn btn-primary" type="submit">Submit Order</button></div></form>`;
}

function resultDrawer(index) {
  const r = results[index || 0];
  const values = [["WBC","12.4","×10⁹/L","4.5–11.0",true],["RBC","4.82","×10¹²/L","4.2–5.9"],["Hemoglobin","14.2","g/dL","13.5–17.5"],["Hematocrit","42.6","%","41–53"],["MCV","88.4","fL","80–100"],["Platelets","286","×10⁹/L","150–450"]];
  return `<div class="drawer-info"><div><span>Result ID</span><strong>${r[0]}</strong></div><div><span>Order No.</span><strong>${r[1]}</strong></div><div><span>Patient</span><strong>${r[2]}</strong></div><div><span>Facility</span><strong>${r[4]}</strong></div><div><span>Test</span><strong>${r[3]}</strong></div><div><span>Status</span>${badge(r[5])}</div></div><div class="form-field full" style="margin-bottom:18px"><label>Order Status</label><select><option>${r[5]}</option><option>Pending</option><option>Verified</option><option>Released</option></select></div><h3 class="form-section-title">${icon("activity")} Result values</h3><table class="result-values"><thead><tr><th>Parameter</th><th>Result</th><th>Unit</th><th>Reference</th></tr></thead><tbody>${values.map(v=>`<tr><td>${v[0]}</td><td class="${v[4]?"abnormal":""}">${v[1]}</td><td>${v[2]}</td><td>${v[3]}</td></tr>`).join("")}</tbody></table><div class="form-field full"><label>Laboratory Notes</label><textarea>Specimen received in good condition. WBC is slightly elevated; correlate clinically.</textarea></div><h3 class="form-section-title" style="margin-top:20px">${icon("audit")} Status timeline</h3><div class="timeline">${[["Result Created","Jun 25, 8:02 AM"],["Result Received at Lab","8:26 AM"],["Result Pending Review","10:08 AM"],["Result Verified","10:32 AM"],["Result Released","Pending"]].map((x,i)=>`<div class="timeline-item ${i<4?"done":""}"><i class="timeline-dot"></i><strong>${x[0]}</strong><time>${x[1]}</time></div>`).join("")}</div><div class="form-actions"><button class="btn btn-danger" type="button" data-result-action="rejected">Reject</button><button class="btn btn-success" type="button" data-result-action="verified">Verify</button><button class="btn btn-blue" type="button" data-result-action="released">Release</button></div>`;
}

function notificationDrawer(index) {
  const n = notificationData[index || 0];
  return `<div style="display:flex;align-items:center;gap:12px;margin-bottom:20px"><span class="notification-icon">${icon(n[3])}</span><div><h3 style="margin:0 0 5px;font-size:15px">${n[0]}</h3>${badge(n[5]?"Pending":"Released")}</div></div><p style="color:var(--muted);font-size:11px;line-height:1.65">${n[1]}</p><div class="drawer-info"><div><span>Date and time</span><strong>Jun 25, 2026 · 10:42 AM</strong></div><div><span>Patient Name</span><strong>Maria Santos</strong></div><div><span>Patient ID</span><strong>PT-10492</strong></div><div><span>Test</span><strong>Complete Blood Count</strong></div><div><span>Order ID</span><strong>LAB-2026-0842</strong></div><div><span>Reported By</span><strong>Marco Villanueva</strong></div></div><h3 class="form-section-title">${icon("file")} Related records</h3><div class="selection-box"><span class="selection-chip">RES-260618</span><span class="selection-chip">LAB-2026-0842</span></div><div class="form-actions"><button class="btn btn-secondary" type="button" data-go-page="orders">View Order</button><button class="btn btn-primary" type="button" data-go-page="results">View Result</button><button class="btn btn-blue" type="button" data-save>Notify Doctor</button></div>`;
}

function passwordDrawer() {
  return `<form data-drawer-form><div class="form-section"><div class="form-grid">${field("Current Password","password","Enter current password",true)}${field("New Password","password","At least 8 characters",true)}${field("Confirm New Password","password","Repeat new password",true)}</div></div><div class="form-actions"><button class="btn btn-secondary" type="button" data-close-drawer>Cancel</button><button class="btn btn-primary" type="submit">Update Password</button></div></form>`;
}

const drawerConfig = {
  user: ["Create New User", userDrawer], facility: ["Create New Facility", facilityDrawer], assign: ["Assign Staff to Facility", assignmentDrawer],
  test: ["New Test Definition", testDrawer], order: ["Create Laboratory Order", orderDrawer], result: ["Result Review", resultDrawer],
  notification: ["Notification Details", notificationDrawer], password: ["Change Password", passwordDrawer],
};

const content = document.querySelector("#page-content");
const drawer = document.querySelector("#admin-drawer");
const drawerBody = document.querySelector("#drawer-body");
const drawerTitle = document.querySelector("#drawer-title");

function openDrawer(type, record) {
  const config = drawerConfig[type];
  if (!config) return;
  const index = record === undefined || record === "" ? undefined : Number(record);
  const editing = Number.isInteger(index) && ["user","facility","test","order"].includes(type);
  drawerTitle.textContent = editing ? `Edit ${type === "test" ? "Test Definition" : type[0].toUpperCase()+type.slice(1)}` : config[0];
  drawerBody.innerHTML = config[1](index);
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden","false");
  document.querySelector(".drawer-scrim").classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(() => drawerBody.querySelector("input, select, textarea, button")?.focus(), 100);
}

function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden","true");
  document.querySelector(".drawer-scrim").classList.remove("open");
  document.body.style.overflow = "";
}

function toast(message) {
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `${icon("check")}<span>${message}</span>`;
  document.querySelector(".toast-region").append(el);
  setTimeout(() => el.remove(), 3500);
}

function setPage(requested, updateHash = true) {
  const page = pageRenderers[requested] ? requested : "dashboard";
  content.innerHTML = pageRenderers[page]();
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.page === page));
  document.querySelector("#page-title").textContent = pageMeta[page][0];
  document.title = `${pageMeta[page][0]} | Clinic Management System`;
  if (updateHash && location.hash !== `#${page}`) history.pushState(null,"",`#${page}`);
  window.scrollTo({top:0,behavior:"smooth"});
  closeSidebar();
}

function openSidebar() {
  document.querySelector("#sidebar").classList.add("open");
  document.querySelector(".sidebar-scrim").classList.add("open");
}
function closeSidebar() {
  document.querySelector("#sidebar").classList.remove("open");
  document.querySelector(".sidebar-scrim").classList.remove("open");
}

document.addEventListener("click", (event) => {
  const pageLink = event.target.closest("[data-page], [data-go-page]");
  if (pageLink) {
    event.preventDefault();
    setPage(pageLink.dataset.page || pageLink.dataset.goPage);
    closeDrawer();
    return;
  }
  const drawerTrigger = event.target.closest("[data-drawer]");
  if (drawerTrigger) { event.preventDefault(); openDrawer(drawerTrigger.dataset.drawer, drawerTrigger.dataset.record); return; }
  if (event.target.closest("[data-close-drawer]")) { closeDrawer(); return; }
  if (event.target.closest("[data-open-sidebar]")) { openSidebar(); return; }
  if (event.target.closest("[data-close-sidebar]")) { closeSidebar(); return; }
  if (event.target.closest("[data-save], [data-save-draft]")) { toast(event.target.closest("[data-save-draft]") ? "Draft saved successfully." : "Changes saved successfully."); return; }
  if (event.target.closest("[data-result-action]")) { const action = event.target.closest("[data-result-action]").dataset.resultAction; toast(`Result marked as ${action}.`); closeDrawer(); return; }
  if (event.target.closest("[data-mark-read]")) { document.querySelectorAll(".notification-item.unread").forEach((item)=>item.classList.remove("unread")); toast("All notifications marked as read."); return; }
  const profileToggle = event.target.closest("[data-profile-toggle]");
  const profileDropdown = document.querySelector(".profile-dropdown");
  if (profileToggle) { const expanded = profileToggle.getAttribute("aria-expanded") === "true"; profileToggle.setAttribute("aria-expanded",String(!expanded)); profileDropdown.hidden = expanded; }
  else if (!event.target.closest(".profile-menu-wrap")) { document.querySelector("[data-profile-toggle]").setAttribute("aria-expanded","false"); profileDropdown.hidden = true; }
});

document.addEventListener("submit", (event) => {
  if (!event.target.matches("[data-drawer-form]")) return;
  event.preventDefault();
  toast("Saved successfully. The table has been updated.");
  closeDrawer();
});

document.addEventListener("input", (event) => {
  if (!event.target.matches("[data-table-search]")) return;
  const query = event.target.value.toLowerCase().trim();
  const rows = content.querySelectorAll(".data-table tbody tr, .notification-item");
  rows.forEach((row) => { row.hidden = !row.textContent.toLowerCase().includes(query); });
});

document.querySelector("#global-search").addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.currentTarget.value.trim()) {
    toast(`Searching the clinic system for “${event.currentTarget.value.trim()}”`);
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); document.querySelector("#global-search").focus(); }
  if (event.key === "Escape") { closeDrawer(); closeSidebar(); }
});

window.addEventListener("hashchange", () => setPage(location.hash.slice(1), false));
setPage(location.hash.slice(1), false);
const initialDrawer = new URLSearchParams(location.search).get("drawer");
if (drawerConfig[initialDrawer]) {
  setTimeout(() => openDrawer(initialDrawer, new URLSearchParams(location.search).get("record")), 0);
}
