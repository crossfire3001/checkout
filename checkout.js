"use strict";

(() => {
  $("#redeem").click(function () {
    let promocode = $("#promo-code").val();
    let url = "http://testologia.site/promo-code?name=" + promocode;

    let http = new XMLHttpRequest();
    http.open("get", url);
    http.send();

    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        let result = null;
        try {
          result = JSON.parse(http.responseText);
        } catch (e) {}

        if (result) {
          let promoElement = $("#promocode");
          promoElement.removeClass("d-none").addClass("d-flex");
          promoElement.find("small").text(promocode);
        } else {
        }
      }
    };
  });
})();
