(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.carousel').carousel();
    $('#nav-mobile a').click(function() {
      $("#sidenav-overlay").click();
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space