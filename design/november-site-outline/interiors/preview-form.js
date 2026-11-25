const form = document.querySelector("[data-preview-form]");
const auditCopy = document.querySelector("[data-audit-copy]");

if (auditCopy && new URLSearchParams(window.location.search).get("intent") === "audit") {
  auditCopy.hidden = false;
  document.querySelector("[data-inquiry-copy]").hidden = true;
  form.querySelector("[data-context-label]").textContent = "Portfolio size or context";
  document.title = "Discuss a capacity audit | Veep";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = form.querySelector("[data-preview-status]");
  status.textContent = status.dataset.message;
});
