var LandingPageJS = LandingPageJS || {};
LandingPageJS = {
    handleCarousel: function () {
        $('#mkt-ja-landing-page .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 3000
                },
                767: {
                    items: 1,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 3000
                },
                1000: {
                    items: 3,
                    verticalSwiping: false,
                    mouseDrag: false
                }
            }
        })
    },

    init: function () {
        LandingPageJS.handleCarousel();
    }
};

$(function () {
    LandingPageJS.init();
});