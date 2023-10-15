"use strict";

(() => {
  $("#redeem").click(function () {
    let promoInput = $("#promo-code");
    let url = "http://testologia.site/promo-code?name=" + promoInput.val();

    let http = new XMLHttpRequest();
    http.open("get", url);
    http.send();
    promoInput.css("border-color", "black");

    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        let result = null;
        try {
          result = JSON.parse(http.responseText);
        } catch (e) {}

        let promoElement = $("#promocode");
        if (result && result.hasOwnProperty("amount")) {
          promoElement.removeClass("d-none").addClass("d-flex");
          promoElement.find("small").text(promoInput.val().toUpperCase());
          promoElement.find("text-success").text("-$" + result.amount);
        } else {
          promoElement.removeClass("d-flex").addClass("d-none");
          promoInput.css("border-color", "red");
        }
      }
    };
  });
})();
