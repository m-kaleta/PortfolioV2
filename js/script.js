const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const text = document.querySelector('#message')

const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')


const showError = (input, msg) => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector(".error-text")

    formBox.classList.add("error")
    errorMsg.textContent = msg;
}
 
const clearError = input => {
    const formBox = input.parentElement;
    formBox.classList.remove("error")
}

const checkLabel = input => {
    input.forEach(el => {
        if(el.value === "") {
            showError(el, el.placeholder)
        } else {
            clearError(el)
            console.log("ok;)")
        }
    })
}


sendBtn.addEventListener("click", (e) => {

    checkLabel([userName, email, text])
})

clearBtn.addEventListener("click", (e) => {

    [userName, email, text].forEach(el => {
        el.value = ""
        clearError(el)
    })

})




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