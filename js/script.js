// init WOW
new WOW().init();

// btn icon top
$(".btn-icon-top").on("click", function(e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0
    },
    1000
  );
});

// show btn icon top
$(document).scroll(function() {
  const btnIconTop = $(".btn-icon-top");

  if ($("html, body").scrollTop() > 150) {
    btnIconTop.addClass("active-btn");
  } else {
    btnIconTop.removeClass("active-btn");
  }
});