$(".open").click(function () {
  $(".slider").animate({ width: "300px" }, 100);
});

$(".close").click(function () {
  $(".slider").animate({ width: "0px" }, 100);
});

$(".slider a").click(function () {
  let href = $(this).attr("href");
  let offset = $(href).offset().top;
  $("html,body").animate({ scrollTop: offset }, 1000);
});

$(".toggle").click(function () {
  let its_inner = $(this).next();
  $(".inner").not(its_inner).slideUp(500);
  $(this).next().slideToggle(500);
});

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  $("#days").html(`${days} d`);
  $("#hours").html(`${hours} h`);
  $("#minutes").html(`${minutes} m`);
  $("#seconds").html(`${seconds} s`);
}, 1000);

$("textarea").keyup(function () {
  let value = $(this).val().length;
  let count = 100 - value;
  $("#chars").html(count);
});
