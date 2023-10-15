'use strict';

(() => {
  $("#redeem").click(function () {
    let url = "http://testologia.site/promo-code?name=" + $("#promo-code").val();
    console.log(url);

    let http = new XMLHttpRequest();
    http.open("get", url);
    http.send();

    http.onreadystatechange = () => {
     if (http.readyState === 4 && http.status === 200) {

     } else {

     }
    }
  })



})()
