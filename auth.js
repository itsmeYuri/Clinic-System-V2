(function () {
  const SESSION_KEY = "cms_session_v1";
  const PATIENTS_KEY = "cms_registered_patients_v1";

  const accounts = [
    { id: "admin-001", name: "Admin User", email: "admin@clinic.com", password: "admin123", role: "Admin", avatar: "AU", assignedFacility: null, patientProfileId: null },
    { id: "doctor-001", name: "Dr. Amelia Carter", email: "doctor@clinic.com", password: "doctor123", role: "Doctor", avatar: "AC", assignedFacility: "Central Medical Center", patientProfileId: null },
    { id: "lab-001", name: "Lab Staff User", email: "labstaff@clinic.com", password: "lab123", role: "Laboratory Staff", avatar: "LS", assignedFacility: "Central Medical Center", patientProfileId: null },
    { id: "patient-001", name: "Sarah Johnson", email: "patient@clinic.com", password: "patient123", role: "Patient", avatar: "SJ", assignedFacility: "Central Medical Center", patientProfileId: "PT-10492" },
  ];

  const destinations = {
    Admin: "admin.html#dashboard",
    Doctor: "doctor.html#dashboard",
    "Laboratory Staff": "laboratory.html#dashboard",
    Patient: "patient.html#dashboard",
  };

  const safeParse = (value, fallback) => {
    try { return JSON.parse(value) ?? fallback; } catch { return fallback; }
  };

  const publicUser = (account) => {
    const { password, ...user } = account;
    return user;
  };

  function getSession() {
    return safeParse(localStorage.getItem(SESSION_KEY), null);
  }

  function setSession(account) {
    const session = { ...publicUser(account), signedInAt: new Date().toISOString() };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return session;
  }

  function login(identifier, password) {
    const normalized = identifier.trim().toLowerCase();
    const registered = safeParse(localStorage.getItem(PATIENTS_KEY), []);
    const account = [...accounts, ...registered].find((item) =>
      (item.email.toLowerCase() === normalized || item.username?.toLowerCase() === normalized) && item.password === password
    );
    return account ? { ok: true, user: setSession(account), destination: destinations[account.role] } : { ok: false };
  }

  function registerPatient(input) {
    const registered = safeParse(localStorage.getItem(PATIENTS_KEY), []);
    const email = input.email.trim().toLowerCase();
    const username = input.username.trim().toLowerCase();
    if ([...accounts, ...registered].some((item) => item.email.toLowerCase() === email || item.username?.toLowerCase() === username)) {
      return { ok: false, message: "An account already exists with that email or username." };
    }
    const initials = input.fullName.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
    const account = {
      id: `patient-${Date.now()}`,
      name: input.fullName.trim(),
      email,
      username,
      password: input.password,
      role: "Patient",
      avatar: initials,
      assignedFacility: "Central Medical Center",
      patientProfileId: `PT-${String(Date.now()).slice(-5)}`,
      dateOfBirth: input.dateOfBirth || null,
      sex: input.sex || null,
      contact: input.contact || null,
      address: input.address || null,
    };
    registered.push(account);
    localStorage.setItem(PATIENTS_KEY, JSON.stringify(registered));
    return { ok: true, user: setSession(account), destination: destinations.Patient };
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    location.href = "index.html#login";
  }

  function requireRole(role) {
    const session = getSession();
    if (!session) {
      sessionStorage.setItem("cms_auth_message", "Please sign in to access that page.");
      location.replace("index.html#login");
      return false;
    }
    if (session.role !== role) {
      sessionStorage.setItem("cms_auth_message", "Access denied. You do not have permission to view this page.");
      location.replace(destinations[session.role] || "index.html#login");
      return false;
    }
    return true;
  }

  function hydrateProfile() {
    const session = getSession();
    if (!session) return;
    document.querySelectorAll(".profile-copy strong").forEach((el) => { el.textContent = session.name; });
    document.querySelectorAll(".profile-copy small").forEach((el) => { el.textContent = session.role; });
    document.querySelectorAll(".profile-button .avatar").forEach((el) => { el.textContent = session.avatar; });
  }

  window.ClinicAuth = { accounts, destinations, getSession, login, logout, requireRole, registerPatient, hydrateProfile };

  const requiredRole = document.body?.dataset.requiredRole;
  if (requiredRole) requireRole(requiredRole);
  hydrateProfile();

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-logout], .sidebar-logout, .profile-dropdown a[href$='index.html']")) {
      event.preventDefault();
      logout();
    }
  });
})();
