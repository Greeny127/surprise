var confettiSettings = {
  target: "confetti-canvas",
  max: 150,
  size: 3,
  clock: 50,
};
var confetti = new ConfettiGenerator(confettiSettings);

$(function () {
  confetti.render();
});
