$(document).ready(function(){
    // $('.tabs').tabs();
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
    var elem = document.querySelector('.collapsible.expandable');
    var instance = M.Collapsible.init(elem, {
      accordion: false
    });
    $('.collapsible.expandable').collapsible({
      accordion: false,  
      onOpenEnd: function() { 
        $('.carousel.carousel-slider').carousel({
          fullWidth: true,
          indicators: true
        });  
      }
    })
    
    $('select').formSelect();
    setInterval(function() {
      $('.carousel').carousel('next');
    }, 4000);
});
