let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Desplazándose hacia abajo
        header.style.transform = 'translateY(-100%)'; // Oculta el header
    } else {
        // Desplazándose hacia arriba
        header.style.transform = 'translateY(0)'; // Muestra el header
    }

    lastScrollTop = scrollTop;
});
