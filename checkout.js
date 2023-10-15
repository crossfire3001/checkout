// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  $("#redeem").click(function () {
    let url = "http://testologia.site/promo-code?name=" + $("#promo-code").val();
    console.log(url);
  })

})()
