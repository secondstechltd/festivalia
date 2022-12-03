class HandleHttpRequests {
  /* 
    ----------- FUNCTION -------------------------------------------------------------------------------------------------------------------------------------
  */
  static async handleTicketPurchaseFeature(form) {
    const formErr = form.querySelector(".msg-wrappers .error-msg-wrapper p");
    const formPass = form.querySelector(".msg-wrappers .success-msg-wrapper p");

    formErr.innerHTML = "";
    formPass.innerHTML = "";

    try {
      const res = await fetch("/ticket/create/post", {
        method: "POST",
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          phone: form.phone.value,
          ticket: form.ticket.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.response == "SUCCESS") {
        formPass.innerHTML = "Ticket purchased successfully";

        setTimeout(() => {
          location.assign("/");
        }, 3000);
      }

      if (data.errors) {
        formErr.innerHTML = "Error occured";
      }
    } catch (error) {}
  }

  /* 
    ----------- FUNCTION -------------------------------------------------------------------------------------------------------------------------------------
  */
  static async handleReservationFeature(form) {
    const formErr = form.querySelector(".msg-wrappers .error-msg-wrapper p");
    const formPass = form.querySelector(".msg-wrappers .success-msg-wrapper p");

    formErr.innerHTML = "";
    formPass.innerHTML = "";

    try {
      const res = await fetch("/reservation/post", {
        method: "POST",
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          phone: form.phone.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.response == "SUCCESS") {
        formPass.innerHTML = "Reservation successfully made";

        setTimeout(() => {
          location.assign("/");
        }, 3000);
      }

      if (data.errors) {
        formErr.innerHTML = "Error occured";
      }
    } catch (error) {}
  }
}
