document.getElementById("switchButton").onclick = function () {
  document.getElementById("myBody").classList.toggle("dark");
};

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".navbar").css("background", "white");
    } else {
      $(".navbar").css("background", "transparent");
    }
  });
});
