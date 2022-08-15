const aside = document.querySelector("aside")
const p = document.querySelectorAll(".menu-p")
const logo = document.querySelector(".logo")

const ocultarParagrafos = (opacity) => {
    p.forEach((p => {
        p.style.opacity = opacity;
    }))
}


aside.onclick = () => {
    aside.classList.toggle("active")
    if (aside.classList.contains("active") == true) {
        ocultarParagrafos(100)
    } else {
        ocultarParagrafos(0)
    }
}