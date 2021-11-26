var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    /*pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },*/
    breakpoints: {
        
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        827: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1147: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },

});


    