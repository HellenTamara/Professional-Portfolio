// Redirecting click from latest works

$(document).ready(function () {
    $(".arrow-wrap-1").click(function () {
        window.open("https://example.com", "_blank");
    });

    $(".arrow-wrap-2").click(function () {
        window.open("https://example.com", "_blank");
    });

    $(".project-wrap").click(function () {
        window.open("https://example.com", "_blank");
    });
});

// Contact window
$(document).ready(function () {
    $(".button-style").click(function (e) {
        e.stopPropagation();
        $(".window-overlay").fadeIn();
        $(".window-wrapper").addClass("change");
    });

    $(window).click(function () {
        if ($(".window-wrapper").hasClass("change")) {
            $(".window-overlay").fadeOut();
            $(".window-wrapper").removeClass("change");
        }
    });

    $(".window-wrapper").click(function (e) {
        e.stopPropagation();
    });
});





