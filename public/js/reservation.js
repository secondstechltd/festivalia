const form = document.querySelector("form#reservation-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  HandleHttpRequests.handleReservationFeature(form);
});
