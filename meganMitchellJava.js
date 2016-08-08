$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    } 
  });

  window.sr = ScrollReveal();
     sr.reveal('.bio');
     sr.reveal('.bioPersonal');
     sr.reveal('.skills');
     sr.reveal('.division');
     sr.reveal('.contact');
     sr.reveal('.contactDetails');
     sr.reveal('.socialMedia'); 

});
 


  

