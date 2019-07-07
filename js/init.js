(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.carousel').carousel();
        $('#nav-mobile a').click(function () {
            $("#sidenav-overlay").click();
        });

        var currentPageVersion;
        $.get('/version', function(data) {
            currentPageVersion = data;
            setInterval(function () {
                $.get('/version', function(data) {
                    if (data != currentPageVersion) {
                        currentPageVersion = data;
                        if (confirm('Nová verze návodu k dispozici, aktualizovat?')) {
                            location.reload(true);
                        }
                    }
                });
            }, 3 * 60 * 1000);
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space