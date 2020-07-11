document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".navbar")

addShadow = () => {
    if(window.scrollY >= 300) {
        nav.classList.add("shadow-bg")
    } else {
        nav.classList.remove("shadow-bg")
    }
}

$('.portfolio-carousel').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 3
        }
    },
    {
        breakpoint: 1600,
        settings: {
            slidesToShow: 4
        }
    }, 
]
});
  
window.addEventListener("scroll", addShadow)

})