// Espera a que todo el contenido del DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
    // Obtiene el elemento con el ID "menu-toggle", que probablemente sea el botón para mostrar/ocultar el menú
    const menuToggle = document.getElementById("menu-toggle");
    // Obtiene el elemento con la clase "nav-links", que representa las opciones del menú de navegación
    const navLinks = document.querySelector(".nav-links");

    // Verifica que ambos elementos existan en el DOM antes de agregar los eventos
    if (menuToggle && navLinks) {
        // Agrega un evento de clic al botón del menú
        menuToggle.addEventListener("click", () => {
            // Alterna la clase "active" en las opciones del menú, mostrando u ocultando el menú
            navLinks.classList.toggle("active");
            // Alterna la clase "active" en el botón del menú para cambiar su apariencia o estado
            menuToggle.classList.toggle("active");
        });
    } else {
        // Si alguno de los elementos no se encuentra en el DOM, muestra un error en la consola
        console.error("No se encontraron los elementos necesarios para el menú.");
    }
});
