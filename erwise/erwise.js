$(document).ready(function(){
$('#popup-close').on('click', function(){
  $('.popup').toggleClass('isClosed')
});
$( function() {
    $( ".popup" ).draggable();
  } );


  // $('.next').on('click', function(){
  //   var id = $(this).data("id");
  //
  //   $('.switcher-column').removeClass('isActive');
  //   $(this).addClass('isActive');
  //
  //   $(".content").removeClass("isActive");
  //   $(".content[data-id='" + id + "']").addClass("isActive");
  // });


});
