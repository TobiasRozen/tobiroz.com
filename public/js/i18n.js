/* ============================================================
   I18N.JS — Switch de idioma Español / Inglés
   Diccionario centralizado + funcion que aplica el idioma
   a todos los elementos marcados con [data-i18n]
   ============================================================ */

const I18N = {
    es: {
        "nav.about": "Sobre mí",
        "nav.stack": "Tecnologías",
        "nav.experience": "Experiencia",
        "nav.projects": "Proyectos",
        "nav.contact": "Contacto",
        "nav.cta": "Contactarme",

        "hero.eyebrow": "Disponible para nuevos proyectos",
        "hero.title": "Construyo productos<br>impulsados por <span class=\"accent\">Inteligencia Artificial</span>.",
        "hero.subtitle": "Full Stack Developer enfocado en llevar ideas a producción: visión artificial, modelos de lenguaje y arquitecturas backend escalables.",
        "hero.tag1": "Full Stack Developer",
        "hero.tag2": "Computer Vision",
        "hero.tag3": "LLMs",
        "hero.tag4": "Automatización",
        "hero.tag5": "Arquitectura Backend",
        "hero.cta_projects": "Ver proyectos",
        "hero.cta_contact": "Contactarme",
        "hero.scroll": "Scroll",

        "about.eyebrow": "Sobre mí",
        "about.title": "Desarrollador de software con foco en IA",
        "about.desc": "Diseño soluciones que combinan aplicaciones web modernas, visión artificial y modelos de lenguaje para resolver problemas reales, con la escalabilidad y el criterio técnico de un producto pensado para producción.",
        "about.fact1_label": "Formación",
        "about.fact1_value": "Tecnicatura Universitaria en Programación — UTN",
        "about.fact2_label": "Trayectoria",
        "about.fact2_value": "Desarrollando software desde 2019",
        "about.fact3_label": "Especialización",
        "about.fact3_value": "Inteligencia Artificial aplicada",
        "about.fact4_label": "Enfoque",
        "about.fact4_value": "Desarrollo Full Stack end-to-end",

        "objectives.lead": "Mi objetivo es crear soluciones tecnológicas escalables que combinen Inteligencia Artificial, automatización y desarrollo Full Stack, participando en proyectos de alto impacto que generen valor real para empresas y usuarios.",
        "objectives.p1_title": "Inteligencia Artificial",
        "objectives.p1_desc": "Modelos aplicados a problemas concretos, no como experimento aislado.",
        "objectives.p2_title": "Automatización",
        "objectives.p2_desc": "Procesos que reducen carga operativa y liberan tiempo humano.",
        "objectives.p3_title": "Software escalable",
        "objectives.p3_desc": "Arquitecturas pensadas para crecer sin rehacerse desde cero.",
        "objectives.p4_title": "Productos tecnológicos",
        "objectives.p4_desc": "De la idea a producción, con foco en el usuario final.",

        "stack.eyebrow": "Stack",
        "stack.title": "Herramientas con las que construyo",
        "stack.desc": "Pasá el mouse sobre cada tecnología para ver dónde la aplico.",

        stackDetails: {
            python: {
                title: "Python",
                desc: "Lenguaje principal utilizado para:",
                items: ["Backend", "Inteligencia Artificial", "Automatización", "APIs", "Scripts"],
            },
            fastapi: {
                title: "FastAPI",
                desc: "Framework para construir APIs:",
                items: ["Alto rendimiento", "Tipado con Pydantic", "Documentación automática"],
            },
            react: {
                title: "React",
                desc: "Interfaces de usuario:",
                items: ["Componentes reutilizables", "Estado dinámico", "SPAs modernas"],
            },
            nextjs: {
                title: "Next.js",
                desc: "Framework de React para producción:",
                items: ["Renderizado híbrido (SSR/SSG)", "Rutas basadas en archivos", "Optimización de imágenes"],
            },
            javascript: {
                title: "JavaScript",
                desc: "Lenguaje base para la web:",
                items: ["Interactividad de interfaz", "Integraciones y APIs", "Automatización de bots"],
            },
            typescript: {
                title: "TypeScript",
                desc: "JavaScript con tipado estático:",
                items: ["Menos errores en producción", "Autocompletado y mantenibilidad"],
            },
            postgresql: {
                title: "PostgreSQL",
                desc: "Base de datos relacional:",
                items: ["Modelado de datos robusto", "Consultas complejas", "Escalabilidad"],
            },
            docker: {
                title: "Docker",
                desc: "Contenedores para despliegue:",
                items: ["Entornos reproducibles", "Despliegue simplificado"],
            },
            linux: {
                title: "Linux",
                desc: "Sistema operativo de servidores:",
                items: ["Administración de infraestructura", "Automatización con shell"],
            },
            git: {
                title: "Git",
                desc: "Control de versiones:",
                items: ["Trabajo colaborativo", "Historial y ramas de desarrollo"],
            },
            openai: {
                title: "OpenAI API",
                desc: "Modelos de lenguaje aplicados a:",
                items: ["Chatbots y asistentes", "Generación de contenido", "Automatización de tareas"],
            },
            whisper: {
                title: "Whisper",
                desc: "Reconocimiento de voz:",
                items: ["Transcripción de audio", "Procesamiento de lenguaje hablado"],
            },
            yolo: {
                title: "YOLO",
                desc: "Detección de objetos en tiempo real:",
                items: ["Visión artificial", "Modelos entrenados a medida"],
            },
            opencv: {
                title: "OpenCV",
                desc: "Procesamiento de imágenes:",
                items: ["Visión por computadora", "Preprocesamiento para modelos IA"],
            },
            pytorch: {
                title: "PyTorch",
                desc: "Entrenamiento de modelos:",
                items: ["Redes neuronales", "Fine-tuning de modelos IA"],
            },
            huggingface: {
                title: "HuggingFace",
                desc: "Ecosistema de modelos IA:",
                items: ["Modelos preentrenados", "NLP y visión artificial"],
            },
            ollama: {
                title: "Ollama",
                desc: "Modelos de lenguaje locales:",
                items: ["Ejecución on-premise", "Privacidad y control de datos"],
            },
            cloudflare: {
                title: "Cloudflare",
                desc: "Infraestructura web:",
                items: ["Hosting y CDN", "Seguridad y rendimiento"],
            },
        },

        "experience.eyebrow": "Experiencia",
        "experience.title": "Trayectoria profesional",
        "experience.desc": "Un recorrido cronológico por los roles y proyectos que fui construyendo.",
        "experience.present": "Presente",
        "exp4.date": "2024 — Presente",
        "exp4.role": "Desarrollador Full Stack Freelance",
        "exp4.org": "Proyectos independientes",
        "exp4.desc": "Aplicaciones web end-to-end con dashboards administrativos, sistemas de monitoreo y soluciones escalables integrando APIs REST e IA.",
        "exp5.date": "2025 — Presente",
        "exp5.role": "Especialista en IA y Automatización",
        "exp5.org": "Proyectos independientes",
        "exp5.desc": "Soluciones de visión artificial, LLMs, procesamiento de audio y arquitecturas RAG para automatizar procesos empresariales.",
        "exp1.date": "2023 - 2025",
        "exp1.role": "Fundador — Nexium Community",
        "exp1.org": "Comunidad de streamers e influencers",
        "exp1.desc": "Gestión técnica de una comunidad digital, con automatización de procesos y desarrollo de bots propios para Discord.",
        "exp2.date": "2023",
        "exp2.role": "Desarrollador Web — Drigo",
        "exp2.org": "Plataforma web",
        "exp2.desc": "Plataforma con actualización de contenido en tiempo real, optimización de rendimiento frontend y estabilidad bajo alta concurrencia.",
        "exp3.date": "2023 — Presente",
        "exp3.role": "Co-fundador & Developer — Altomar",
        "exp3.org": "Visión artificial aplicada",
        "exp3.desc": "Modelos propios de detección y fine-tuning para mejorar la precisión de detección en tiempo real.",

        "projects.eyebrow": "Proyectos",
        "projects.title": "Servicios que construí",
        "projects.desc": "De la idea al deploy: proyectos propios y para clientes.",

        "proj.apuntaria.name": "ApuntarIA",
        "proj.apuntaria.problem": "Convierte clases y material extenso en apuntes claros y accionables.",
        "proj.apuntaria.desc": "Plataforma web que transforma clases y documentos en apuntes, resúmenes y material de estudio de forma automática.",
        "proj.apuntaria.cta": "Ver detalle",

        "proj.telegram.name": "Plataforma para Taxis y Remises",
        "proj.telegram.problem": "Gestiona pedidos de viajes sin necesidad de una app dedicada.",
        "proj.telegram.desc": "Bot inteligente en Telegram para coordinar solicitudes de viaje, asignación de choferes y seguimiento de pedidos en tiempo real.",
        "proj.telegram.cta": "Ver detalle",

        "proj.detection.name": "Sistema de Detección de Objetos",
        "proj.detection.problem": "Identifica y clasifica objetos en video en tiempo real.",
        "proj.detection.desc": "Sistema de visión artificial con modelos YOLO reentrenados para casos de uso específicos, sobre transmisiones en vivo.",
        "proj.detection.cta": "Ver detalle",

        "proj.discord.name": "Bots para Discord",
        "proj.discord.problem": "Reduce la carga de moderación manual en comunidades grandes.",
        "proj.discord.desc": "Bots personalizados con sistema de tickets, reproducción de música, moderación automática y flujos de eventos.",
        "proj.discord.cta": "Ver detalle",

        "proj.mylifestreaming.name": "My Life Streaming",
        "proj.mylifestreaming.problem": "Juego para seleccionar tu propia aventura como streamer",
        "proj.mylifestreaming.desc": "Juego interactivo donde los jugadores pueden crear y vivir su propia aventura como streamer.",
        "proj.mylifestreaming.cta": "Visitar sitio",

        "proj.altomar.name": "Altomar",
        "proj.altomar.problem": "Sitio web para presentar el producto y su tecnología de detección.",
        "proj.altomar.desc": "Landing y plataforma para Altomar, con foco en comunicar claramente la propuesta de valor del producto.",
        "proj.altomar.cta": "Visitar sitio",

        "proj.nexium.name": "Nexium Community",
        "proj.nexium.problem": "Punto de encuentro para una comunidad de streamers e influencers.",
        "proj.nexium.desc": "Sitio web y bots de soporte para la comunidad, integrando automatización de procesos y gestión de eventos.",
        "proj.nexium.cta": "Visitar sitio",

        "contact.eyebrow": "Contacto",
        "contact.title": "¿Necesitas contactarme?",
        "contact.desc": "Si tienes alguna pregunta o necesitas ayuda con algo, no dudes en contactarme.",
        "contact.reply_label": "Respondo en",
        "contact.reply_value": "Menos de 48 horas",
        "contact.location_label": "Ubicación",
        "contact.location_value": "La Plata, Argentina",
        "contact.form_name": "Nombre",
        "contact.form_name_ph": "Tu nombre",
        "contact.form_email": "Email",
        "contact.form_email_ph": "Tu correo electrónico",
        "contact.form_message": "Mensaje",
        "contact.form_message_ph": "Contame sobre tu proyecto",
        "contact.form_submit": "Enviar mensaje",

        "footer.home": "Inicio",
        "footer.projects": "Proyectos",
        "footer.contact": "Contacto",

        /* ---- Página: ApuntarIA ---- */
        "apuntaria.eyebrow": "Proyecto de IA aplicada",
        "apuntaria.hero_title": "ApuntarIA",
        "apuntaria.hero_desc": "Plataforma web que transforma clases, documentos y material educativo en recursos de estudio interactivos mediante Inteligencia Artificial: resúmenes, mapas conceptuales, evaluaciones y un asistente conversacional disponible las 24 horas.",
        "apuntaria.features_eyebrow": "Capacidades",
        "apuntaria.features_title": "Qué resuelve la plataforma",
        "apuntaria.f1_title": "Grabación de clases",
        "apuntaria.f1_desc": "Graba clases o conferencias desde la plataforma para su transcripción y análisis automático mediante IA.",
        "apuntaria.f2_title": "Carga de archivos",
        "apuntaria.f2_desc": "Soporta PDF, audio y video, convirtiendo cualquier material en contenido estructurado y fácil de comprender.",
        "apuntaria.f3_title": "Procesamiento de YouTube",
        "apuntaria.f3_desc": "Analiza videos educativos a partir de un link, extrayendo el contenido para generar apuntes y resúmenes.",
        "apuntaria.f4_title": "Resúmenes inteligentes",
        "apuntaria.f4_desc": "La IA identifica los conceptos más importantes y genera resúmenes claros y optimizados para estudiar.",
        "apuntaria.f5_title": "Cuadros y mapas conceptuales",
        "apuntaria.f5_desc": "Organiza la información en estructuras visuales que facilitan comprender la relación entre conceptos.",
        "apuntaria.f6_title": "Evaluaciones automáticas",
        "apuntaria.f6_desc": "Genera preguntas de práctica, ejercicios y simulacros de examen con respuestas explicadas.",
        "apuntaria.f7_title": "Asistente conversacional",
        "apuntaria.f7_desc": "Chat inteligente que responde preguntas usando exclusivamente el contenido procesado de cada clase.",
        "apuntaria.f8_title": "Flashcards de estudio",
        "apuntaria.f8_desc": "Crea automáticamente tarjetas y conceptos clave para facilitar la memorización y repaso.",
        "apuntaria.tech_title": "Tecnologías utilizadas",
        "apuntaria.closing": "ApuntarIA fue concebido como un asistente de estudio inteligente, capaz de transformar cualquier clase o recurso educativo en material de aprendizaje listo para usar, optimizando significativamente el proceso de estudio.",

        /* ---- Página: Bots para Discord ---- */
        "discord.eyebrow": "Bots & Automatización",
        "discord.hero_title": "Bots para Discord",
        "discord.hero_desc": "Desarrollo de bots personalizados con Node.js y Python, adaptados a las necesidades de comunidades, streamers, empresas y organizaciones.",
        "discord.features_eyebrow": "Capacidades",
        "discord.features_title": "Qué resuelve cada bot",
        "discord.f1_title": "Comandos slash",
        "discord.f1_desc": "Comandos \"/\" para consultas rápidas, automatización de procesos, gestión de usuarios e integración con APIs externas.",
        "discord.f2_title": "Sistema de bienvenida",
        "discord.f2_desc": "Mensajes automáticos para nuevos miembros, asignación de roles y configuración personalizada por servidor.",
        "discord.f3_title": "Sistema de tickets",
        "discord.f3_desc": "Creación automática de canales privados de soporte, atención de administradores y cierre automatizado.",
        "discord.f4_title": "Calificación de soporte",
        "discord.f4_desc": "Al finalizar una atención, los usuarios valoran el servicio y se generan estadísticas para moderación.",
        "discord.f5_title": "Menús interactivos",
        "discord.f5_desc": "Botones, select menus y formularios que dirigen automáticamente a los usuarios al canal o servicio correcto.",
        "discord.f6_title": "Bot de música",
        "discord.f6_desc": "Reproducción por comandos, gestión de colas de reproducción y control desde canales de voz.",
        "discord.tech_title": "Tecnologías utilizadas",
        "discord.closing": "Además de estas funciones, desarrollo sistemas de moderación, automatización, gestión de roles, estadísticas y soluciones a medida para comunidades de Discord.",

        /* ---- Página: PediteUNO (Telegram) ---- */
        "telegram.eyebrow": "Automatización de transporte",
        "telegram.hero_title": "PediteUNO",
        "telegram.hero_desc": "Sistema desarrollado en Python y Telegram para la gestión automatizada de solicitudes de viajes, validación de conductores y administración centralizada de servicios de transporte.",
        "telegram.features_eyebrow": "Capacidades",
        "telegram.features_title": "Qué resuelve la plataforma",
        "telegram.f1_title": "Solicitud automática de viajes",
        "telegram.f1_desc": "Los pasajeros piden un viaje enviando su ubicación en Telegram; el sistema calcula la tarifa y asigna un conductor disponible.",
        "telegram.f2_title": "Geolocalización inteligente",
        "telegram.f2_desc": "Procesamiento de ubicaciones en tiempo real para determinar cobertura, distancias y optimizar la asignación de viajes.",
        "telegram.f3_title": "Validación de conductores",
        "telegram.f3_desc": "Registro automatizado mediante carga de DNI, licencia y habilitación vehicular requerida para operar.",
        "telegram.f4_title": "Panel administrativo",
        "telegram.f4_desc": "Centro de control para aprobar conductores, supervisar operaciones y monitorear toda la actividad de la plataforma.",
        "telegram.f5_title": "Motor de tarifas dinámicas",
        "telegram.f5_desc": "Cálculo automático según distancia, horarios diurnos/nocturnos y parámetros configurables por ciudad.",
        "telegram.f6_title": "Sistema anti-fraude",
        "telegram.f6_desc": "Detección de cancelaciones recurrentes, bloqueos automáticos y registro histórico para auditoría.",
        "telegram.tech_title": "Tecnologías utilizadas",
        "telegram.closing": "PediteUNO fue diseñado como una solución escalable para modernizar servicios de taxis y remises, automatizando la gestión de pasajeros, conductores y operaciones comerciales de punta a punta.",

        /* ---- Página: Detección de Objetos ---- */
        "detection.eyebrow": "Computer Vision",
        "detection.hero_title": "Detección de Objetos con IA",
        "detection.hero_desc": "Desarrollo completo de datasets, entrenamiento de modelos de visión artificial y detección de objetos en tiempo real utilizando Python, Roboflow y modelos de Machine Learning.",
        "detection.features_eyebrow": "Capacidades",
        "detection.features_title": "Qué resuelve el sistema",
        "detection.f1_title": "Generación de dataset",
        "detection.f1_desc": "Extracción automática de frames desde videos para construir conjuntos de datos personalizados para entrenamiento.",
        "detection.f2_title": "Etiquetado y segmentación",
        "detection.f2_desc": "Clasificación y segmentación de objetos mediante Roboflow, asignando categorías para su reconocimiento automático.",
        "detection.f3_title": "Entrenamiento de modelos",
        "detection.f3_desc": "Entrenamiento de modelos personalizados con Python y datasets propios para detección optimizada.",
        "detection.f4_title": "Generación de modelos .pt",
        "detection.f4_desc": "Modelos entrenados capaces de reconocer y diferenciar objetos según las categorías definidas.",
        "detection.f5_title": "Detección en tiempo real",
        "detection.f5_desc": "Análisis de video en vivo o grabado, identificando objetos automáticamente y mostrando resultados al instante.",
        "detection.f6_title": "Sistemas de alertas",
        "detection.f6_desc": "Avisos automáticos cuando se detectan eventos, acciones u objetos específicos definidos por el cliente.",
        "detection.tech_title": "Tecnologías utilizadas",
        "detection.closing": "Esta solución permite automatizar procesos de monitoreo, inspección y control mediante cámaras, transformando imágenes y videos en información útil para la toma de decisiones.",

        /* ---- Compartido entre las 4 páginas de proyecto ---- */
        "project.more": "Ver más proyectos",
        "project.talk": "Hablemos de tu proyecto",
    },

    en: {
        "nav.about": "About",
        "nav.stack": "Stack",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "nav.cta": "Contact me",

        "hero.eyebrow": "Available for new projects",
        "hero.title": "I build products<br>powered by <span class=\"accent\">Artificial Intelligence</span>.",
        "hero.subtitle": "Full Stack Developer focused on shipping ideas to production: computer vision, language models, and scalable backend architectures.",
        "hero.tag1": "Full Stack Developer",
        "hero.tag2": "Computer Vision",
        "hero.tag3": "LLMs",
        "hero.tag4": "Automation",
        "hero.tag5": "Backend Architecture",
        "hero.cta_projects": "View projects",
        "hero.cta_contact": "Contact me",
        "hero.scroll": "Scroll",

        "about.eyebrow": "About me",
        "about.title": "Software engineering focused on AI",
        "about.desc": "I design solutions that combine modern web apps, computer vision, and language models to solve real problems, with the scalability and technical rigor of a production-ready product.",
        "about.fact1_label": "Education",
        "about.fact1_value": "University Technical Degree in Programming — UTN",
        "about.fact2_label": "Track record",
        "about.fact2_value": "Building software since 2019",
        "about.fact3_label": "Specialization",
        "about.fact3_value": "Applied Artificial Intelligence",
        "about.fact4_label": "Focus",
        "about.fact4_value": "End-to-end Full Stack development",

        "objectives.lead": "My goal is to create scalable technology solutions that combine Artificial Intelligence, automation, and Full Stack development, taking part in high-impact projects that generate real value for companies and users.",
        "objectives.p1_title": "Artificial Intelligence",
        "objectives.p1_desc": "Models applied to concrete problems, not as an isolated experiment.",
        "objectives.p2_title": "Automation",
        "objectives.p2_desc": "Processes that reduce operational load and free up human time.",
        "objectives.p3_title": "Scalable software",
        "objectives.p3_desc": "Architectures designed to grow without being rebuilt from scratch.",
        "objectives.p4_title": "Technology products",
        "objectives.p4_desc": "From idea to production, with a focus on the end user.",

        "stack.eyebrow": "Stack",
        "stack.title": "Tools I build with",
        "stack.desc": "Hover over each technology to see where I apply it.",
        
        stackDetails: {
            python: {
                title: "Python",
                desc: "Main language used for:",
                items: ["Backend", "Artificial Intelligence", "Automation", "APIs", "Scripts"],
            },
            fastapi: {
                title: "FastAPI",
                desc: "Framework for building APIs:",
                items: ["High performance", "Pydantic typing", "Automatic documentation"],
            },
            react: {
                title: "React",
                desc: "User interface library:",
                items: ["Reusable components", "Dynamic state", "Modern SPAs"],
            },
            nextjs: {
                title: "Next.js",
                desc: "Production framework for React:",
                items: ["Hybrid rendering (SSR/SSG)", "File-based routing", "Image optimization"],
            },
            javascript: {
                title: "JavaScript",
                desc: "Core language of the web:",
                items: ["Interactive interfaces", "API integrations", "Bot automation"],
            },
            typescript: {
                title: "TypeScript",
                desc: "JavaScript with static typing:",
                items: ["Fewer production errors", "Autocomplete and maintainability"],
            },
            postgresql: {
                title: "PostgreSQL",
                desc: "Relational database:",
                items: ["Robust data modeling", "Complex queries", "Scalability"],
            },
            docker: {
                title: "Docker",
                desc: "Containers for deployment:",
                items: ["Reproducible environments", "Simplified deployment"],
            },
            linux: {
                title: "Linux",
                desc: "Server operating system:",
                items: ["Infrastructure administration", "Shell automation"],
            },
            git: {
                title: "Git",
                desc: "Version control:",
                items: ["Collaborative development", "History and branching"],
            },
            openai: {
                title: "OpenAI API",
                desc: "Language models applied to:",
                items: ["Chatbots and assistants", "Content generation", "Task automation"],
            },
            whisper: {
                title: "Whisper",
                desc: "Speech recognition:",
                items: ["Audio transcription", "Spoken language processing"],
            },
            yolo: {
                title: "YOLO",
                desc: "Real-time object detection:",
                items: ["Computer vision", "Custom-trained models"],
            },
            opencv: {
                title: "OpenCV",
                desc: "Image processing:",
                items: ["Computer vision", "Preprocessing for AI models"],
            },
            pytorch: {
                title: "PyTorch",
                desc: "Model training:",
                items: ["Neural networks", "AI model fine-tuning"],
            },
            huggingface: {
                title: "HuggingFace",
                desc: "AI model ecosystem:",
                items: ["Pretrained models", "NLP and computer vision"],
            },
            ollama: {
                title: "Ollama",
                desc: "Local language models:",
                items: ["On-premise execution", "Privacy and data control"],
            },
            cloudflare: {
                title: "Cloudflare",
                desc: "Web infrastructure:",
                items: ["Hosting and CDN", "Security and performance"],
            },
        },

        "experience.eyebrow": "Experience",
        "experience.title": "Professional background",
        "experience.desc": "A chronological look at the roles and projects I've built along the way.",
        "experience.present": "Present",
        "exp4.date": "2024 — Present",
        "exp4.role": "Freelance Full Stack Developer",
        "exp4.org": "Independent projects",
        "exp4.desc": "End-to-end web applications with admin dashboards, monitoring systems, and scalable solutions integrating REST APIs and AI.",
        "exp5.date": "2025 — Present",
        "exp5.role": "AI & Automation Specialist",
        "exp5.org": "Independent projects",
        "exp5.desc": "Computer vision solutions, LLMs, audio processing, and RAG architectures to automate business processes.",
        "exp1.date": "2023 - 2025",
        "exp1.role": "Founder — Nexium Community",
        "exp1.org": "Streamer & influencer community",
        "exp1.desc": "Technical management of a digital community, with process automation and custom Discord bot development.",
        "exp2.date": "2023",
        "exp2.role": "Web Developer — Drigo",
        "exp2.org": "Web platform",
        "exp2.desc": "Platform with real-time content updates, frontend performance optimization, and stability under high concurrency.",
        "exp3.date": "2023 — Present",
        "exp3.role": "Co-founder & Developer — Altomar",
        "exp3.org": "Applied computer vision",
        "exp3.desc": "Custom detection models and fine-tuning to improve real-time detection accuracy.",

        "projects.eyebrow": "Projects",
        "projects.title": "Services I've built",
        "projects.desc": "From idea to deploy: personal and client projects.",

        "proj.apuntaria.name": "ApuntarIA",
        "proj.apuntaria.problem": "Turns lengthy classes and materials into clear, actionable notes.",
        "proj.apuntaria.desc": "A web platform that automatically transforms classes and documents into notes, summaries, and study materials.",
        "proj.apuntaria.cta": "View details",

        "proj.telegram.name": "Taxi & Rideshare Platform",
        "proj.telegram.problem": "Manages ride requests without needing a dedicated app.",
        "proj.telegram.desc": "Smart Telegram bot to coordinate ride requests, driver assignment, and real-time order tracking.",
        "proj.telegram.cta": "View details",

        "proj.detection.name": "Object Detection System",
        "proj.detection.problem": "Identifies and classifies objects in video in real time.",
        "proj.detection.desc": "Computer vision system with retrained YOLO models for specific use cases, applied to live video feeds.",
        "proj.detection.cta": "View details",

        "proj.discord.name": "Discord Bots",
        "proj.discord.problem": "Reduces manual moderation workload in large communities.",
        "proj.discord.desc": "Custom bots with ticket systems, music playback, automatic moderation, and event workflows.",
        "proj.discord.cta": "View details",

        "proj.mylifestreaming.name": "My Life Streaming",
        "proj.mylifestreaming.problem": "A platform for streamers to share their content and connect with their audience.",
        "proj.mylifestreaming.desc": "Web platform that allows streamers to showcase their content, manage schedules, and interact with their community.",
        "proj.mylifestreaming.cta": "Visit site",

        "proj.altomar.name": "Altomar",
        "proj.altomar.problem": "Website to present the product and its detection technology.",
        "proj.altomar.desc": "Landing page and platform for Altomar, focused on clearly communicating the product's value proposition.",
        "proj.altomar.cta": "Visit site",

        "proj.nexium.name": "Nexium Community",
        "proj.nexium.problem": "A gathering place for a streamer and influencer community.",
        "proj.nexium.desc": "Website and support bots for the community, integrating process automation and event management.",
        "proj.nexium.cta": "Visit site",

        "contact.eyebrow": "Contact",
        "contact.title": "Do you need to contact me?",
        "contact.desc": "If you have any questions or need help with something, don't hesitate to contact me.",
        "contact.reply_label": "I reply within",
        "contact.reply_value": "Less than 48 hours",
        "contact.location_label": "Location",
        "contact.location_value": "La Plata, Argentina",
        "contact.form_name": "Name",
        "contact.form_name_ph": "Your name",
        "contact.form_email": "Email",
        "contact.form_email_ph": "Your email address",
        "contact.form_message": "Message",
        "contact.form_message_ph": "Tell me about your project",
        "contact.form_submit": "Send message",

        "footer.home": "Home",
        "footer.projects": "Projects",
        "footer.contact": "Contact",

        /* ---- Page: ApuntarIA ---- */
        "apuntaria.eyebrow": "Applied AI Project",
        "apuntaria.hero_title": "ApuntarIA",
        "apuntaria.hero_desc": "A web platform that turns classes, documents, and educational material into interactive study resources using Artificial Intelligence: summaries, mind maps, assessments, and a conversational assistant available 24/7.",
        "apuntaria.features_eyebrow": "Capabilities",
        "apuntaria.features_title": "What the platform solves",
        "apuntaria.f1_title": "Class recording",
        "apuntaria.f1_desc": "Record classes or lectures directly from the platform for automatic transcription and AI analysis.",
        "apuntaria.f2_title": "File upload",
        "apuntaria.f2_desc": "Supports PDF, audio, and video, turning any material into structured, easy-to-understand content.",
        "apuntaria.f3_title": "YouTube processing",
        "apuntaria.f3_desc": "Analyzes educational videos from a link, extracting the content to generate notes and summaries.",
        "apuntaria.f4_title": "Smart summaries",
        "apuntaria.f4_desc": "The AI identifies the most important concepts and generates clear, optimized summaries for studying.",
        "apuntaria.f5_title": "Diagrams and mind maps",
        "apuntaria.f5_desc": "Organizes information into visual structures that make it easier to understand how concepts relate.",
        "apuntaria.f6_title": "Automatic assessments",
        "apuntaria.f6_desc": "Generates practice questions, exercises, and mock exams with explained answers.",
        "apuntaria.f7_title": "Conversational assistant",
        "apuntaria.f7_desc": "Smart chat that answers questions using exclusively the content processed from each class.",
        "apuntaria.f8_title": "Study flashcards",
        "apuntaria.f8_desc": "Automatically creates flashcards and key concepts to make memorization and review easier.",
        "apuntaria.tech_title": "Technologies used",
        "apuntaria.closing": "ApuntarIA was conceived as a smart study assistant, capable of turning any class or educational resource into ready-to-use learning material, significantly optimizing the study process.",

        /* ---- Page: Discord Bots ---- */
        "discord.eyebrow": "Bots & Automation",
        "discord.hero_title": "Discord Bots",
        "discord.hero_desc": "Development of custom bots with Node.js and Python, tailored to the needs of communities, streamers, companies, and organizations.",
        "discord.features_eyebrow": "Capabilities",
        "discord.features_title": "What each bot solves",
        "discord.f1_title": "Slash commands",
        "discord.f1_desc": "\"/\" commands for quick queries, process automation, user management, and integration with external APIs.",
        "discord.f2_title": "Welcome system",
        "discord.f2_desc": "Automatic messages for new members, role assignment, and per-server custom configuration.",
        "discord.f3_title": "Ticket system",
        "discord.f3_desc": "Automatic creation of private support channels, admin handling, and automated closing.",
        "discord.f4_title": "Support rating",
        "discord.f4_desc": "After each support interaction, users can rate the service, generating stats for moderators.",
        "discord.f5_title": "Interactive menus",
        "discord.f5_desc": "Buttons, select menus, and forms that automatically route users to the right channel or service.",
        "discord.f6_title": "Music bot",
        "discord.f6_desc": "Command-based playback, queue management, and control from voice channels.",
        "discord.tech_title": "Technologies used",
        "discord.closing": "Beyond these features, I also build moderation systems, automation, role management, statistics, and custom solutions for Discord communities.",

        /* ---- Page: PediteUNO (Telegram) ---- */
        "telegram.eyebrow": "Transportation automation",
        "telegram.hero_title": "PediteUNO",
        "telegram.hero_desc": "A system built with Python and Telegram for automated ride requests, driver validation, and centralized management of transportation services.",
        "telegram.features_eyebrow": "Capabilities",
        "telegram.features_title": "What the platform solves",
        "telegram.f1_title": "Automatic ride requests",
        "telegram.f1_desc": "Passengers request a ride by sending their location on Telegram; the system calculates the fare and assigns an available driver.",
        "telegram.f2_title": "Smart geolocation",
        "telegram.f2_desc": "Real-time location processing to determine coverage, distances, and optimize ride assignment.",
        "telegram.f3_title": "Driver validation",
        "telegram.f3_desc": "Automated registration through ID, driver's license, and vehicle permit uploads required to operate.",
        "telegram.f4_title": "Admin panel",
        "telegram.f4_desc": "Control center to approve drivers, oversee operations, and monitor all platform activity.",
        "telegram.f5_title": "Dynamic pricing engine",
        "telegram.f5_desc": "Automatic calculation based on distance, day/night hours, and configurable per-city parameters.",
        "telegram.f6_title": "Anti-fraud system",
        "telegram.f6_desc": "Detection of recurring cancellations, automatic blocks, and historical records for auditing.",
        "telegram.tech_title": "Technologies used",
        "telegram.closing": "PediteUNO was designed as a scalable solution to modernize taxi and rideshare services, fully automating passenger, driver, and business operations management.",

        /* ---- Page: Object Detection ---- */
        "detection.eyebrow": "Computer Vision",
        "detection.hero_title": "AI Object Detection System",
        "detection.hero_desc": "Full development of datasets, computer vision model training, and real-time object detection using Python, Roboflow, and Machine Learning models.",
        "detection.features_eyebrow": "Capabilities",
        "detection.features_title": "What the system solves",
        "detection.f1_title": "Dataset generation",
        "detection.f1_desc": "Automatic frame extraction from videos to build custom datasets for training.",
        "detection.f2_title": "Labeling and segmentation",
        "detection.f2_desc": "Classification and segmentation of objects using Roboflow, assigning categories for automatic recognition.",
        "detection.f3_title": "Model training",
        "detection.f3_desc": "Training of custom models with Python and proprietary datasets for optimized detection.",
        "detection.f4_title": ".pt model generation",
        "detection.f4_desc": "Trained models capable of recognizing and distinguishing objects according to defined categories.",
        "detection.f5_title": "Real-time detection",
        "detection.f5_desc": "Analysis of live or recorded video, automatically identifying objects and showing results instantly.",
        "detection.f6_title": "Alert systems",
        "detection.f6_desc": "Automatic alerts when specific events, actions, or objects defined by the client are detected.",
        "detection.tech_title": "Technologies used",
        "detection.closing": "This solution automates monitoring, inspection, and control processes through cameras, turning images and video into useful information for decision-making.",

        /* ---- Shared across the 4 project pages ---- */
        "project.more": "View more projects",
        "project.talk": "Let's talk about your project",
    },
};

/**
 * Aplica el idioma indicado a todos los elementos [data-i18n],
 * [data-i18n-placeholder] y [data-i18n-html] presentes en el DOM.
 */
function applyLanguage(lang) {
    const dict = I18N[lang] || I18N.es;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
            // Si el texto incluye tags HTML (ej: <br>, <span>), usamos innerHTML
            if (dict[key].includes("<")) {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict[key] !== undefined) {
            el.setAttribute("placeholder", dict[key]);
        }
    });

    document.documentElement.lang = lang;

    // Notifica a otros scripts (ej: stack.js) que el idioma cambio,
    // para que puedan actualizar contenido generado dinamicamente
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

document.addEventListener("DOMContentLoaded", () => {
    const switchBtn = document.getElementById("langSwitch");
    if (!switchBtn) return;

    // Recupera el idioma guardado, o usa español por defecto
    let currentLang = "es";
    try {
        currentLang = localStorage.getItem("site-lang") || "es";
    } catch (e) {
        currentLang = "es";
    }

    switchBtn.setAttribute("data-lang", currentLang);
    applyLanguage(currentLang);

    switchBtn.addEventListener("click", () => {
        currentLang = currentLang === "es" ? "en" : "es";
        switchBtn.setAttribute("data-lang", currentLang);
        applyLanguage(currentLang);
        try {
            localStorage.setItem("site-lang", currentLang);
        } catch (e) {
            /* localStorage no disponible: el idioma simplemente no persiste */
        }
    });
});