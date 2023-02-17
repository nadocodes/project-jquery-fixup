// loading bar
var elem = document.getElementById("myBar");
var width = 5;
var id = setInterval(frame, 15);
function frame() {
  if (width >= 100) {
    clearInterval(id);
    $(document).ready(function () {
      $(".btn1").show();
    });
  } else {
    width++;
    elem.style.width = width + "%";
    document.getElementById("label").innerHTML = width * 1 + "%";
  }
}

// gallery section
$("#gallery > div:gt(0)").hide();

setInterval(function () {
  $("#gallery > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#gallery");
}, 3000);

// show button
$(document).ready(function () {
  $(".btn1").click(function () {
    $("div#btn-container").hide();
    $("div.logo").css('display', 'flex');
    $("article").show();
    $("#myProgress").hide();
  });
});

// onload volume
jQuery(function($) {
    $("#player").prop("volume", 0.1);

    window.setVolume = function(player, vol) {
        sounds[player].volume = vol;
    }
});