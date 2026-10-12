/* ============================================================
   MAIN.JS — Punto de entrada general
   Maneja el formulario de contacto (EmailJS) y el ano del footer
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    // --- Footer: ano dinamico ---
    const yearEl = document.getElementById("footer-year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // --- Formulario de contacto ---
    const form = document.getElementById("contactForm");
    const statusEl = document.getElementById("formStatus");

    if (form && window.emailjs) {
        // Inicializa EmailJS con la public key del proyecto
        emailjs.init("k-rCXHSwIgwBakuz5");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            statusEl.textContent = "Enviando mensaje...";
            statusEl.className = "form-status";

            emailjs.send("service_74n09wo", "template_zxsepk3", {
                to_name: "Destinatario",
                from_name: name,
                from_email: email,
                message: message,
            }).then(
                function () {
                    statusEl.textContent = "Mensaje enviado correctamente. ¡Gracias por escribirme!";
                    statusEl.className = "form-status success";
                    form.reset();
                },
                function (error) {
                    statusEl.textContent = "Hubo un error al enviar el mensaje. Intenta nuevamente.";
                    statusEl.className = "form-status error";
                    console.error("EmailJS error:", error);
                }
            );
        });
    }
});
