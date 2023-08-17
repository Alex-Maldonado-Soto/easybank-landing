const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
const nav = document.getElementById("nav");
const backgroundNav = document.getElementById("backgroundNav");



openNav.addEventListener("click", function () {
    openNav.style.display = "none";
    closeNav.style.display = "inherit";
    nav.style.display = "inherit";
    backgroundNav.style.display = "inherit";

});

closeNav.addEventListener("click", function () {
    closeNav.style.display = "none";
    openNav.style.display = "inherit";
    nav.style.display = "none";
    backgroundNav.style.display = "none";
});