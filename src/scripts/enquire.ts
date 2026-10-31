function initEnquiry() {
  const form = document.querySelector<HTMLFormElement>("[data-enquiry]");
  if (!form) return;

  const confirmation = document.querySelector<HTMLElement>(
    "[data-enquiry-confirmation]",
  );

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    form.hidden = true;
    if (confirmation) {
      confirmation.hidden = false;
      confirmation.focus();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEnquiry);
} else {
  initEnquiry();
}
