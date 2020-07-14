
// FORM

const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const text = document.querySelector('#message')
const success = document.querySelector(".success")

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
        }
    })
}

const checkEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.value === "") {
        showError()
    }

    if(re.test(email.value)) {
        clearError(email) 
    } else {
        showError(email, "Email zawiera niedozwolone znaki!")
    }
}

const checkLength = (input, min) => {
    if(input.value.length < min) {
        showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} musi składać sie z min. ${min} znaków.`)
    }
}

const clearSucces = () => {
    success.classList.remove("success2")
}

const clearLabels = () => {
    [userName, email, text].forEach(el => {
        el.value = ""
    })
}

const checkErrors = () => {
    const inputs = document.querySelectorAll(".form-box")
    errors = 0

    inputs.forEach(el => {
        if(el.classList.contains("error")) {
            errors++
        }
    })

    if(errors === 0) {
        success.classList.add("success2")
        clearLabels()
    }
}

sendBtn.addEventListener("click", (e) => {

    checkLabel([userName, email, text])
    checkLength(userName, 4)
    checkLength(text, 8)
    checkEmail(email)
    checkErrors()
})

clearBtn.addEventListener("click", (e) => {
    clearLabels()
    clearSucces()
})

// NAV

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".navbar")

addShadow = () => {
    if(window.scrollY >= 300) {
        nav.classList.add("shadow-bg")
    } else {
        nav.classList.remove("shadow-bg")
    }
}

// SLIDER PORTFOLIO

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