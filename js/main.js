
      var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        loop:true,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        /* esta parte es para los puntitos de navegación  */
        /*pagination: {    
          el: ".swiper-pagination",
        },*/

        
      });
   