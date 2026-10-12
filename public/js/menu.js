/* ============================================================
   MENU.JS — Navegacion movil (hamburguesa)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const links = document.querySelector(".nav-links");

    if (!toggle || !links) return;

    toggle.addEventListener("click", () => {
        const isOpen = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        toggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    // Cierra el menu al elegir un link (mejora la navegacion en mobile)
    links.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            links.classList.remove("open");
            toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            toggle.setAttribute("aria-expanded", "false");
        });
    });
});
