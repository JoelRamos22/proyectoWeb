document.addEventListener("DOMContentLoaded", function() {
    var menuMovilIcon = document.querySelector(".header__menu-movil");
    var menuMovil = document.querySelector(".menu-movil"); // Cambiado a querySelector
    // El problema estaba aquí, seleccionando por id en lugar de por clase

    menuMovilIcon.addEventListener("click", function() {
        menuMovil.classList.toggle("show");
    });
});