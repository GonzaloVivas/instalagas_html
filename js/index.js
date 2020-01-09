$(document).ready(function(){
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.modal').modal();
    $(".modal").width($(".modal").width());
    $(".modal").height($(".modal").height());
    $('select').formSelect();
    $('.slider-promos').slider({
      height: 550
    });

    $("#logo-nav").addClass("hide");

    $('.customer-logos').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 3
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 2
          }
      }]
  });
});

$(window).scroll(function(){
    if($(window).scrollTop() > $("#hero").height() - 64){
        // $("#logo-nav").removeClass("hide");
        $("#nav-container").removeClass("hide");
    }
    else{
        // $("#logo-nav").addClass("hide");
        $("#nav-container").addClass("hide");
    }
})

$("#btn-hero").click(function(e) {
  e.preventDefault();
  // $("#quienes-somos").animatedScroll({easing: "easeOutExpo"});
  $('html, body').animate({
    scrollTop: $("#quienes-somos").offset().top-100
  }, 500);
})
$("#btn-hero-mob").click(function(e) {
  e.preventDefault();
  // $("#quienes-somos").animatedScroll({easing: "easeOutExpo"});
  $('html, body').animate({
    scrollTop: $("#quienes-somos").offset().top-100
  }, 500);
})

$("#btn-nuestros-trabajos").hover(function(e) {
  $("#img-nuestros-trabajos").addClass("jqhover");
})
$("#btn-nuestros-trabajos").mouseout(function(e) {
  $("#img-nuestros-trabajos").removeClass("jqhover");
})
$("#btn-nuestros-trabajos-2").hover(function(e) {
  $("#img-nuestros-trabajos-2").addClass("jqhover");
})
$("#btn-nuestros-trabajos-2").mouseout(function(e) {
  $("#img-nuestros-trabajos-2").removeClass("jqhover");
})

