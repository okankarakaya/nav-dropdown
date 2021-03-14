const hamIcon = document.querySelector(".hamburger-icon")
const dropdownMenu = document.querySelector(".dropdown-menu")
hamIcon.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active")
})