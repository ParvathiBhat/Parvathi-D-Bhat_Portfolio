const menu = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const close = document.getElementById("close-btn");

menu.addEventListener("click", () => {

    sidebar.classList.add("open");
    overlay.classList.add("show");

});

close.addEventListener("click", () => {

    sidebar.classList.remove("open");
    overlay.classList.remove("show");

});

overlay.addEventListener("click", () => {

    sidebar.classList.remove("open");
    overlay.classList.remove("show");

});