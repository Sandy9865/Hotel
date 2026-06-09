(function () {
  var navToggle = document.querySelector("[data-nav-toggle]");
  var siteNav = document.querySelector("[data-site-nav]");
  var contactForm = document.querySelector("[data-contact-form]");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    siteNav.addEventListener("click", function (event) {
      if (event.target.tagName !== "A") {
        return;
      }

      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    });
  }

  if (contactForm) {
    var selectedRoom = new URLSearchParams(window.location.search).get("room");
    var message = contactForm.querySelector("#message");

    if (selectedRoom && message) {
      message.value = "I would like to enquire about the " + selectedRoom + ".";
    }

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var status = contactForm.querySelector("[data-form-status]");
      contactForm.reset();

      if (status) {
        status.textContent = "Thank you. Your enquiry has been prepared for the booking team.";
      }
    });
  }
})();
