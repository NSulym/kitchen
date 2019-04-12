$(document).ready(function () {
    $(".close").click(function () {
        $(".navigations").addClass("hide-menu");
    });
    $(".burger-btn").click(function () {
        $(".navigations").removeClass("hide-menu");
    });
});

$(document).ready(function () {
    $(".row-cabinets").click(function () {
        $(".block-cabinets").toggleClass("block-cabinets--active");
        $(".icon-cabinets").toggleClass("icon-cabinets--active");
    });
});
$(document).ready(function () {
    $(".row-inspiration").click(function () {
        $(".block-inspiration").toggleClass("block-inspiration--active");
        $(".icon-inspiration").toggleClass("icon-inspiration--active");
    });
});

$(document).ready(function () {
    $(".row-dealers").click(function () {
        $(".block-dealers").toggleClass("block-dealers--active");
        $(".icon-dealers").toggleClass("icon-dealers--active");
    });
});

$(document).ready(function () {
    $(".row-about").click(function () {
        $(".block-about").toggleClass("block-about--active");
        $(".icon-about").toggleClass("icon-about--active");
    });
});