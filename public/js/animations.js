/* ============================================================
   ANIMATIONS.JS — Revela elementos al hacer scroll
   Usa IntersectionObserver para agregar .is-visible una sola vez
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const revealEls = document.querySelectorAll(
        ".reveal, .reveal-blur, .reveal-scale, .reveal-stagger"
    );

    if (!("IntersectionObserver" in window) || revealEls.length === 0) {
        // Fallback: si no hay soporte, mostrar todo directamente
        revealEls.forEach((el) => el.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));

    // Header: agrega sombra sutil al hacer scroll
    const header = document.querySelector(".site-header");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 12) {
                header.style.boxShadow = "0 8px 30px rgba(0,0,0,0.25)";
            } else {
                header.style.boxShadow = "none";
            }
        });
    }
});
