const screens = {
  login: document.querySelector("#login-screen"),
  register: document.querySelector("#register-screen"),
};

const validationRules = {
  "login-identifier": (value) => value.trim() ? "" : "Enter your email address or username.",
  "login-password": (value) => value ? "" : "Enter your password.",
  "full-name": (value) => value.trim().length >= 2 ? "" : "Enter your full name.",
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Enter a valid email address.",
  "contact-number": (value) => /^[+\d][\d\s()-]{7,17}$/.test(value.trim()) ? "" : "Enter a valid contact number.",
  username: (value) => /^[a-zA-Z0-9._-]{3,20}$/.test(value) ? "" : "Use 3–20 letters, numbers, dots, hyphens, or underscores.",
  "register-password": (value) => /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(value) ? "" : "Use 8+ characters with at least one letter and one number.",
  "confirm-password": (value) => value && value === document.querySelector("#register-password").value ? "" : "Passwords do not match.",
  terms: (_, element) => element.checked ? "" : "You must accept the terms before registering.",
};

function setScreen(name, updateHash = true) {
  const selected = name === "register" ? "register" : "login";

  Object.entries(screens).forEach(([screenName, element]) => {
    element.hidden = screenName !== selected;
  });

  document.title = `${selected === "login" ? "Login" : "Create Account"} | Clinic Management System`;
  if (updateHash && window.location.hash !== `#${selected}`) {
    history.pushState(null, "", `#${selected}`);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  const heading = screens[selected].querySelector("h2");
  heading.setAttribute("tabindex", "-1");
  heading.focus({ preventScroll: true });
}

function showFieldError(input, message) {
  const field = input.closest(".field");
  const error = document.querySelector(`#${input.id}-error`);

  field?.classList.toggle("has-error", Boolean(message));
  input.setAttribute("aria-invalid", String(Boolean(message)));

  if (error) {
    error.textContent = message;
    if (message) {
      input.setAttribute("aria-describedby", error.id);
    } else {
      input.removeAttribute("aria-describedby");
    }
  }
}

function validateField(input) {
  const rule = validationRules[input.id];
  if (!rule) return true;

  const message = rule(input.value, input);
  showFieldError(input, message);
  return !message;
}

function showStatus(form, message, type) {
  const status = form.previousElementSibling;
  status.textContent = message;
  status.className = `status-message is-visible ${type}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const controls = [...form.querySelectorAll("input, select")].filter((input) => validationRules[input.id]);
  const valid = controls.map(validateField).every(Boolean);

  if (!valid) {
    showStatus(form, "Please review the highlighted fields and try again.", "error");
    form.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }

  const isLogin = form.id === "login-form";
  if (isLogin) {
    const result = window.ClinicAuth.login(
      document.querySelector("#login-identifier").value,
      document.querySelector("#login-password").value,
    );
    if (!result.ok) {
      showStatus(form, "Invalid username or password.", "error");
      document.querySelector("#login-identifier").focus();
      return;
    }
    showStatus(form, `Welcome, ${result.user.name}. Opening your ${result.user.role} dashboard…`, "success");
    setTimeout(() => { window.location.href = result.destination; }, 550);
    return;
  }

  const result = window.ClinicAuth.registerPatient({
    fullName: document.querySelector("#full-name").value,
    email: document.querySelector("#email").value,
    contact: document.querySelector("#contact-number").value,
    username: document.querySelector("#username").value,
    password: document.querySelector("#register-password").value,
  });
  if (!result.ok) {
    showStatus(form, result.message, "error");
    return;
  }
  showStatus(form, "Your patient account has been created. Opening your secure dashboard…", "success");
  setTimeout(() => { window.location.href = result.destination; }, 650);
}

document.querySelectorAll("[data-screen-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setScreen(link.dataset.screenLink);
  });
});

document.querySelectorAll("[data-toggle-password]").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.querySelector(`#${button.dataset.togglePassword}`);
    const willShow = input.type === "password";
    input.type = willShow ? "text" : "password";
    button.setAttribute("aria-pressed", String(willShow));
    button.setAttribute("aria-label", willShow ? "Hide password" : "Show password");
    input.focus();
  });
});

document.querySelectorAll("[data-demo-account]").forEach((button) => {
  button.addEventListener("click", () => {
    const account = window.ClinicAuth.accounts.find((item) => item.role === button.dataset.demoAccount);
    if (!account) return;
    document.querySelector("#login-identifier").value = account.email;
    document.querySelector("#login-password").value = account.password;
    document.querySelectorAll("[data-demo-account]").forEach((item) => item.classList.toggle("selected", item === button));
    showFieldError(document.querySelector("#login-identifier"), "");
    showFieldError(document.querySelector("#login-password"), "");
    const status = document.querySelector("#login-form").previousElementSibling;
    status.textContent = `${account.role} demo credentials are ready.`;
    status.className = "status-message is-visible success";
    document.querySelector("#login-password").focus();
  });
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", handleSubmit);
  form.querySelectorAll("input, select").forEach((input) => {
    input.addEventListener("blur", () => validateField(input));
    input.addEventListener(input.type === "checkbox" || input.tagName === "SELECT" ? "change" : "input", () => {
      if (input.getAttribute("aria-invalid") === "true") validateField(input);
      const status = form.previousElementSibling;
      if (status.classList.contains("error")) status.className = "status-message";

      if (input.id === "register-password") {
        const confirmation = document.querySelector("#confirm-password");
        if (confirmation.value) validateField(confirmation);
      }
    });
  });
});

window.addEventListener("hashchange", () => {
  const requestedScreen = window.location.hash.slice(1);
  if (requestedScreen === "login" || requestedScreen === "register") {
    setScreen(requestedScreen, false);
  }
});
document.querySelector("#current-year").textContent = new Date().getFullYear();
const initialScreen = window.location.hash.slice(1);
setScreen(initialScreen === "register" ? "register" : "login", false);
const authMessage = sessionStorage.getItem("cms_auth_message");
if (authMessage) {
  sessionStorage.removeItem("cms_auth_message");
  showStatus(document.querySelector("#login-form"), authMessage, "error");
}
