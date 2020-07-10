document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".navbar")


addShadow = () => {
    if(window.scrollY >= 300) {
        nav.classList.add("shadow-bg")
    } else {
        nav.classList.remove("shadow-bg")
    }
}

window.addEventListener("scroll", addShadow)

})