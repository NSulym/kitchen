jQuery(document).ready(function() {
    var btn = $('.foto-stamp');
    $(window).scroll(function() {
        var wHeight = $(window).height();
        var toTop = btn[0].getBoundingClientRect().top;
        if (wHeight - 100 > toTop) {
            btn.addClass('animate');
        } else {
            btn.removeClass('animate');
        }
    });
});