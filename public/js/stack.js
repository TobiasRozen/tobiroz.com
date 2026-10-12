/* ============================================================
   STACK.JS — Comportamiento del carrusel de tecnologias
   Al pasar el mouse: pausa la animacion y muestra una tarjeta
   con el detalle de esa tecnologia. Al salir: la oculta y
   retoma el movimiento.
   ============================================================ */

// Descripciones de cada tecnologia (usadas en la tarjeta flotante)
// const STACK_DETAILS = {
//     python: {
//         title: "Python",
//         desc: "Lenguaje principal utilizado para:",
//         items: ["Backend", "Inteligencia Artificial", "Automatización", "APIs", "Scripts"],
//     },
//     fastapi: {
//         title: "FastAPI",
//         desc: "Framework para construir APIs:",
//         items: ["Alto rendimiento", "Tipado con Pydantic", "Documentación automática"],
//     },
//     react: {
//         title: "React",
//         desc: "Interfaces de usuario:",
//         items: ["Componentes reutilizables", "Estado dinámico", "SPAs modernas"],
//     },
//     nextjs: {
//         title: "Next.js",
//         desc: "Framework de React para producción:",
//         items: ["Renderizado híbrido (SSR/SSG)", "Rutas basadas en archivos", "Optimización de imágenes"],
//     },
//     javascript: {
//         title: "JavaScript",
//         desc: "Lenguaje base para la web:",
//         items: ["Interactividad de interfaz", "Integraciones y APIs", "Automatización de bots"],
//     },
//     typescript: {
//         title: "TypeScript",
//         desc: "JavaScript con tipado estático:",
//         items: ["Menos errores en producción", "Autocompletado y mantenibilidad"],
//     },
//     postgresql: {
//         title: "PostgreSQL",
//         desc: "Base de datos relacional:",
//         items: ["Modelado de datos robusto", "Consultas complejas", "Escalabilidad"],
//     },
//     docker: {
//         title: "Docker",
//         desc: "Contenedores para despliegue:",
//         items: ["Entornos reproducibles", "Despliegue simplificado"],
//     },
//     linux: {
//         title: "Linux",
//         desc: "Sistema operativo de servidores:",
//         items: ["Administración de infraestructura", "Automatización con shell"],
//     },
//     git: {
//         title: "Git",
//         desc: "Control de versiones:",
//         items: ["Trabajo colaborativo", "Historial y ramas de desarrollo"],
//     },
//     openai: {
//         title: "OpenAI API",
//         desc: "Modelos de lenguaje aplicados a:",
//         items: ["Chatbots y asistentes", "Generación de contenido", "Automatización de tareas"],
//     },
//     whisper: {
//         title: "Whisper",
//         desc: "Reconocimiento de voz:",
//         items: ["Transcripción de audio", "Procesamiento de lenguaje hablado"],
//     },
//     yolo: {
//         title: "YOLO",
//         desc: "Detección de objetos en tiempo real:",
//         items: ["Visión artificial", "Modelos entrenados a medida"],
//     },
//     opencv: {
//         title: "OpenCV",
//         desc: "Procesamiento de imágenes:",
//         items: ["Visión por computadora", "Preprocesamiento para modelos IA"],
//     },
//     pytorch: {
//         title: "PyTorch",
//         desc: "Entrenamiento de modelos:",
//         items: ["Redes neuronales", "Fine-tuning de modelos IA"],
//     },
//     huggingface: {
//         title: "HuggingFace",
//         desc: "Ecosistema de modelos IA:",
//         items: ["Modelos preentrenados", "NLP y visión artificial"],
//     },
//     ollama: {
//         title: "Ollama",
//         desc: "Modelos de lenguaje locales:",
//         items: ["Ejecución on-premise", "Privacidad y control de datos"],
//     },
//     cloudflare: {
//         title: "Cloudflare",
//         desc: "Infraestructura web:",
//         items: ["Hosting y CDN", "Seguridad y rendimiento"],
//     },
// };

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".stack-track");
    const detailCard = document.querySelector(".stack-detail-card");
    if (!track || !detailCard) return;

    const items = track.querySelectorAll(".stack-item");

    const titleEl = detailCard.querySelector(".stack-detail-title");
    const descEl = detailCard.querySelector(".stack-detail-desc");
    const listEl = detailCard.querySelector(".stack-detail-list");

    items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            const key = item.dataset.tech;
            // const data = STACK_DETAILS[key];
            const lang = document.documentElement.lang || "es";

            const data = (I18N[lang] || I18N.es).stackDetails[key];

            if (!data) return;

            // Pausa el carrusel
            track.classList.add("paused");
            item.classList.add("active");

            // Desenfoca todos los demas items, dejando nitido solo el activo
            items.forEach((other) => {
                if (other !== item) {
                    other.classList.add("blurred");
                }
            });

            // Rellena y muestra la tarjeta de detalle, arriba del carrusel
            titleEl.textContent = data.title;
            descEl.textContent = data.desc;
            listEl.innerHTML = data.items.map((i) => `<li>${i}</li>`).join("");
            detailCard.classList.add("visible");
        });

        item.addEventListener("mouseleave", () => {
            item.classList.remove("active");
            track.classList.remove("paused");

            // Restaura la nitidez de todos los items
            items.forEach((other) => other.classList.remove("blurred"));

            detailCard.classList.remove("visible");
        });
    });
});

document.addEventListener("languagechange", () => {
    const active = document.querySelector(".stack-item.active");

    if (active) {
        active.dispatchEvent(new Event("mouseenter"));
    }
});
