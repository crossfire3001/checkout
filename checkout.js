"use strict";

(() => {

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  });

  $("#redeem").click(function () {
    let promoInput = $("#promo-code");
    let url = "http://testologia.site/promo-code?name=" + promoInput.val();

    let http = new XMLHttpRequest();
    promoInput.css("border-color", "black");

    $.ajax({
      method: "GET",
      url: url,
    }).done(function (message) {
          let promoElement = $("#promocode");
      if (message && message.hasOwnProperty("amount")) {
        promoElement.removeClass("d-none").addClass("d-flex");
        promoElement.find("small").text(promoInput.val().toUpperCase());
        promoElement.find("text-success").text("-$" + message.amount);
      } else {
        promoElement.removeClass("d-flex").addClass("d-none");
        promoInput.css("border-color", "red");
      }
    });
  });
})();