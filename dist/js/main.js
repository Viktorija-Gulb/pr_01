$(document).ready(function() {
  // menu
  $(".hamburger").click(function() {
    $(".nav-bar .menu").toggleClass("open");
  });

  $(".close-btn").click(function() {
    $(".nav-bar .menu").removeClass("open");
  });

  // reviews
  $(".icons div").click(function() {
    $(".icons div").removeClass("active");
    $('pagination__bullet').removeClass('active');
    
    $(this).addClass("active");

    event.preventDefault();
  });
});
