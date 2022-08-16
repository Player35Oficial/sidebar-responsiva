const aside = document.querySelector("aside")
const menu = document.querySelector(".menu")
const p = document.querySelectorAll(".menu-p")
const logo = document.querySelector(".logo")
const searchLabelParagraph = document.querySelector(".search-label p")
const asideFooter = document.querySelector(".aside-footer")
const userContainer = document.querySelector(".user-container")
const exit = document.querySelector("#log-out")

const ocultarParagrafos = (opacity) => {
    p.forEach((p => {
        p.style.opacity = opacity;
    }))
}


menu.onclick = () => {
    aside.classList.toggle("active")
    asideFooter.classList.toggle("active")
    menu.classList.toggle("active")
    logo.classList.toggle("active")
    exit.classList.toggle("active")
    userContainer.classList.toggle("active")
    if (aside.classList.contains("active") == true) {
        ocultarParagrafos(100)
    } else {
        ocultarParagrafos(0)
    }
}

const ocultarBuscar = () => {
    searchLabelParagraph.innerHTML = "";
}