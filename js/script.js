/* --- SCROLL NAVIGATION --- */

$(document).ready(function () {
    $('a.navbar-brand, a.nav-link').click(function () {
        var $secId = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($secId.attr('href')).offset().top - 55)}, 1000);
    });
    
    $('body').scrollspy({
        target: ".navbar-fixed-top", offset:70
    })
});