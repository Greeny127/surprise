$("#mainbutton").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#p1").offset().top,
    },
    7000
  );
  $("html, body").animate(
    {
      scrollTop: $("#p2").offset().top,
    },
    7000
  );
  $("html, body").animate(
    {
      scrollTop: $("#p3").offset().top,
    },
    7000
  );
  $("html, body").animate(
    {
      scrollTop: $("#contentcontainer").offset().top,
    },
    7000
  );
});
