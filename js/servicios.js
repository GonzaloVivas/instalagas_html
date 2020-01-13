$(document).ready(function(){
    // $('.tabs').tabs();
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
    $('.collapsible.expandable').collapsible();
    $('.collapsible.expandable').collapsible({  
      onOpenEnd: function() {  
        $('.carousel.carousel-slider').carousel({
          fullWidth: true,
          indicators: true
        });  
      }
    })

//     var elem = document.querySelector('.collapsible.expandable');
// var instance = M.Collapsible.init(elem, {
//   accordion: false
// });
    
    $('select').formSelect();
    setInterval(function() {
      $('.carousel').carousel('next');
    }, 4000);
});
