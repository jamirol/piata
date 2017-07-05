jQuery(document).ready(function() {
jQuery('.post').addClass('hidden').viewportChecker({
  classToAdd: 'visible animated bounceInLeft',
  offset: 100
 });
});

  jQuery(document).ready(function() {
  jQuery('.rest').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated bounceInRight',
    offset: 100
   });
  });

  jQuery(document).ready(function() {
  jQuery('.fade').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInDown',
    offset: 100
   });
  });

  jQuery(document).ready(function() {
  jQuery('.up').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: 100
   });
  });


  $('.fa-bars').on('click',function(){
    $('#article li').slideToggle();
  });
