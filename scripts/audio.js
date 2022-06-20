$(function () {
  let audio = new Audio("music/background.mp3");

  audio.volume = 0;
  audio.loop = true;
  $("#mainbutton").click(function () {
    audio.play();
    $(audio).animate({ volume: 0.5 }, 10000);
  });
});
