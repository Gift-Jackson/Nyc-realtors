const toggleBar = document.querySelector(".toggle-box");
const menu = document.querySelector("nav");
const bar = document.querySelector(".bar");

toggleBar.addEventListener("click", function () {
    menu.classList.toggle("active");
    bar.classList.toggle("active");
})

let showModal = () => {
    let modal = document.querySelector('.modal-bg');
    modal.style.display = "flex"
}
let hideModal = () => {
    let modal = document.querySelector('.modal-bg');
    modal.style.display = "none"
}