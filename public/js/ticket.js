const form = document.querySelector("form#ticket-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  HandleHttpRequests.handleTicketPurchaseFeature(form);
});
