# Inventario de contenido — Portfolio Joaquín Viñolo

Documentación de todo el contenido profesional que muestra el sitio. Extraída del código fuente (agosto 2026).

| Dato | Valor |
| --- | --- |
| Sitio | https://joaquinvinolo.com |
| Nombre | Joaquín Viñolo |
| Rol | Full Stack & AI Agent Developer |
| Ubicación | Mendoza, Argentina |
| Disponibilidad | Disponible |
| CV | `assets/document/CV_Joaquin_Vinolo_FullStack_Developer.pdf` |
| Fuente de experiencia | `src/app/data/experience.data.ts` |
| Fuente de proyectos | `src/app/data/projects.data.ts` |
| Fuente de habilidades | `src/app/components/skills/skills.component.ts` |
| Fuente de about | `src/app/components/about/about.component.ts` |
| Fuente de servicios | `src/app/components/services/services.component.ts` |
| Fuente de formación | `src/app/components/education/education.component.ts` + páginas de detalle |

La trayectoria se cuenta con **experiencia laboral**, **proyectos**, **formación** y **servicios**.

---

## 1. Identidad y “Acerca de mí”

### 1.1 Hero (`banner`)

**Badge:** Desarrollador Angular / Full Stack

**Headline:** Construyo soluciones web modernas para procesos de negocio reales.

**Lead:** Soy Joaquín Viñolo, desarrollador Angular / Full Stack. Trabajo desde el análisis funcional hasta la implementación, creando sistemas mantenibles, integraciones API y mejoras sobre productos existentes.

**Bio corta (tarjeta de perfil):** Frontend, integraciones y soluciones web orientadas a producto.

**Stack principal (badges):** Angular · TypeScript · APIs · AWS

**Métricas:**

| Valor | Etiqueta |
| --- | --- |
| +3 años | usando Angular |
| 7 | proyectos documentados |
| SPA & cloud | integraciones reales |
| Frontend + | análisis funcional |

**Foto:** `assets/images/about-me/Foto.png`

**SEO / schema.org (`index.html`):**

- Job title: Full Stack & AI Agent Developer
- Empresa actual (schema): Uteam
- Descripción: especializado en aplicaciones web full stack SPA, sistemas web de gestión, integraciones cloud, automatizaciones AWS Lambda y soluciones empresariales.
- `knowsAbout`: Aplicaciones Web Full Stack SPA, Desarrollo Angular, Sistemas Web de Gestión, Integraciones Cloud, Automatizaciones, Aplicaciones Empresariales SPA

### 1.2 Sobre mí (`about`)

**Eyebrow:** Sobre mí

**Título:** Desarrollo con criterio de producto, no solo código.

**Lead:** Análisis funcional e implementación técnica para problemas reales, con soluciones mantenibles e integraciones útiles.

**Pilares:**

| Valor | Etiqueta |
| --- | --- |
| Angular / Full Stack | enfoque principal |
| Análisis funcional | antes de escribir código |
| SPA & cloud | soluciones en producción |
| Mantenibilidad | código y documentación |

**Bloques de valor:**

| Icono | Título | Descripción |
| --- | --- | --- |
| `bi-diagram-3` | Entiendo procesos de negocio | Trabajo con requerimientos reales. Identifico el problema, los actores y el impacto operativo antes de proponer una solución técnica. |
| `bi-translate` | Traduzco necesidades en soluciones | Convierto pedidos funcionales en arquitectura clara: módulos, flujos, integraciones y entregables que el equipo y el negocio pueden seguir. |
| `bi-window-stack` | Construyo aplicaciones mantenibles | Desarrollo frontend Angular, integraciones API/cloud y automatizaciones con código legible y foco en evolución a largo plazo. |
| `bi-tools` | Mejoro lo que ya existe | Optimizo productos en producción: performance, UX, deuda técnica y nuevas funcionalidades sin romper lo operativo. |

**CTA:** ¿Buscás alguien que entienda el negocio y lo ejecute bien? Revisá los proyectos reales o escribime para conversar sobre tu caso.

### 1.3 Contacto y redes

| Canal | Valor |
| --- | --- |
| Email | joaquin9811@gmail.com |
| WhatsApp | https://wa.me/5492993298415 |
| LinkedIn | https://www.linkedin.com/in/joaquin-vinolo98/ |
| GitHub | https://github.com/joaquin9830 |
| Horario | Lun — Vie, 9:00 — 18:00 |
| Respuesta | menos de 24 h |
| Formulario | Formspree `https://formspree.io/f/mwpnjvpl` |

**Copy de contacto:** ¿Tenés un proyecto, producto u oportunidad para mejorar? Puedo ayudarte con desarrollo Angular, integraciones API, automatizaciones o mejora de sistemas existentes.

---

## 2. Experiencia profesional

Fuente: `src/app/data/experience.data.ts`. Ancla: `#experience`.

### 2.1 Uteam — Full Stack Developer / Analista Funcional

Nov 2024 — Actualidad. Aplicaciones empresariales en producción para el sector seguros, 3.000+ usuarios en LATAM.

Métricas: 3.000+ usuarios · 20+ APIs · 30+ despliegues · 30+ HU · LATAM

Stack: Angular, TypeScript, Python, AWS Lambda, API Gateway, S3, REST API, SOAP API, PostgreSQL, SQL, Git, CI/CD, AI Agents, Agentic Workflows, Automation

### 2.2 Desarrollador Full Stack Independiente

2022 — 2024. Aplicaciones web full stack desde relevamiento hasta entrega.

Stack: Angular, TypeScript, Node.js, NestJS, Java, Spring Boot, MySQL, PostgreSQL, REST API, Git, Docker

---

## 3. Proyectos

Roles que aparecen en los casos de estudio:

| Rol | Proyecto |
| --- | --- |
| Desarrollador Angular / Full Stack — arquitectura frontend, integraciones API y flujos de negocio | SPA Gestión de Trámites |
| Desarrollador Angular — refactor arquitectónico, performance y nuevas features | SPA Operaciones Internas |
| Desarrollador Full Stack — frontend Angular, integraciones y lógica de negocio | Plataforma de Gestión Operativa |
| Desarrollador Frontend — diseño, implementación y despliegue | Unnora |
| Desarrollador Full Stack — frontend, estructura de datos y despliegue | Carta Digital |
| Desarrollador Frontend — diseño, implementación y SEO on-page | Sitio Servicios Locales |
| Desarrollador Backend / Cloud — arquitectura serverless, integraciones y despliegue | Automatizaciones Cloud & Lambdas |

---

Fuente: `src/app/data/projects.data.ts`. Ruta de caso: `/proyecto/:slug`.

**Categorías de filtro:**

| ID | Nombre | Icono |
| --- | --- | --- |
| `all` | Todos | `bi-grid-3x3` |
| `portal` | Aplicaciones SPA | `bi-window-stack` |
| `integracion` | Integraciones | `bi-plug` |
| `automatizacion` | Automatizaciones | `bi-lightning` |
| `web` | Web Apps | `bi-globe` |
| `eventos` | Gestión de eventos | `bi-calendar-event` |

La categoría `integracion` existe en el filtro pero **ningún proyecto la usa**.

**Estados:** `production` → En producción · `completed` → Completado · `in-progress` → En desarrollo.

**Aviso de confidencialidad** (proyectos con `confidential: true`):

> Proyecto privado. Las representaciones visuales no muestran pantallas reales, datos reales, diseño productivo ni información interna de la organización.

**Imágenes por proyecto:** `assets/images/projects/{slug}/cover.webp`, `thumb.webp`, `og.webp`, `fallback.svg`.

---

### 3.1 Aplicación Web SPA para Gestión de Trámites

| Campo | Valor |
| --- | --- |
| Slug | `app-spa-gestion-tramites` |
| Subtítulo | Sistema SPA para flujos operativos y validaciones de negocio |
| Categoría | portal — Aplicaciones SPA |
| Fecha | 2025 — Presente |
| Estado | production |
| Destacado | sí |
| Caso de estudio | sí |
| Confidencial | sí |
| Tecnologías | Angular, TypeScript, RxJS, REST API, SCSS |

**Descripción:** Aplicación web full stack SPA para gestión de trámites, emisión y seguimiento de operaciones con flujos complejos y validaciones regulatorias en entorno privado.

**Problema:** El proceso operativo dependía de múltiples sistemas desconectados, generando demoras, errores manuales y mala experiencia para equipos internos y usuarios finales.

**Solución:** Diseñé e implementé una aplicación Angular modular con flujos guiados, validaciones en tiempo real, integración con servicios backend y arquitectura preparada para escalar nuevos módulos.

**Rol:** Desarrollador Angular / Full Stack — arquitectura frontend, integraciones API y flujos de negocio.

**Impacto:** Reducción del tiempo de tramitación, menor tasa de errores operativos y base escalable para incorporar nuevos procesos.

**Funcionalidades:**

- Flujos multi-paso con validaciones en tiempo real
- Integración con servicios de pricing y emisión
- Gestión de estados operativos en tiempo real
- Arquitectura modular por dominio de negocio
- UI responsive para operación y backoffice

**Resultados:** SPA en producción · Flujos de negocio complejos · Arquitectura escalable

---

### 3.2 Aplicación Web Full Stack para Operaciones Internas

| Campo | Valor |
| --- | --- |
| Slug | `app-fullstack-operaciones-internas` |
| Subtítulo | Evolución de plataforma SPA para operaciones de alto volumen |
| Categoría | portal — Aplicaciones SPA |
| Fecha | 2026 — Presente |
| Estado | production |
| Destacado | sí |
| Caso de estudio | sí |
| Confidencial | sí |
| Tecnologías | Angular, TypeScript, Lazy Loading, REST API, AWS |

**Descripción:** Segunda generación de aplicación web full stack SPA con mejoras de arquitectura, performance y experiencia de usuario para operaciones internas en entorno privado.

**Problema:** La plataforma original no escalaba para nuevos módulos ni soportaba la carga operativa creciente sin degradar la experiencia de usuario.

**Solución:** Reestructuré módulos Angular, optimicé cargas lazy, mejoré la capa de integración con APIs y estandaricé componentes reutilizables para acelerar el desarrollo de nuevas funcionalidades.

**Rol:** Desarrollador Angular — refactor arquitectónico, performance y nuevas features.

**Impacto:** Tiempos de carga reducidos, mayor velocidad de desarrollo de features y plataforma preparada para nuevos módulos de producto.

**Funcionalidades:**

- Lazy loading de módulos por dominio
- Componentes compartidos entre aplicaciones SPA
- Optimización de bundles y performance
- Integración con servicios cloud
- Dashboard operativo para seguimiento

**Resultados:** Segunda generación en producción · Performance optimizada · Componentes reutilizables

---

### 3.3 Plataforma Web de Gestión Operativa

| Campo | Valor |
| --- | --- |
| Slug | `plataforma-gestion-operativa` |
| Subtítulo | Sistema SPA para seguimiento de procesos internos |
| Categoría | web — Web Apps |
| Fecha | 2026 |
| Estado | completed |
| Destacado | sí |
| Caso de estudio | sí |
| Confidencial | sí |
| Tecnologías | Angular, TypeScript, Firebase, SCSS |

**Descripción:** Plataforma web de gestión para operaciones internas y seguimiento de procesos de negocio con panel administrativo y flujos de trabajo definidos.

**Problema:** La operación diaria requería coordinar información dispersa en planillas y herramientas sin integración, dificultando el seguimiento y la toma de decisiones.

**Solución:** Desarrollé una aplicación web SPA con panel de control, gestión de entidades, filtros avanzados y reportes visuales para centralizar la operación.

**Rol:** Desarrollador Full Stack — frontend Angular, integraciones y lógica de negocio.

**Impacto:** Centralización de la operación, visibilidad en tiempo real del estado de procesos y reducción de trabajo manual repetitivo.

**Funcionalidades:**

- Panel administrativo con métricas
- CRUD completo de entidades operativas
- Filtros y búsqueda avanzada
- Diseño responsive mobile-first
- Autenticación y roles de usuario

**Resultados:** Operación centralizada · Panel administrativo · Mobile-first

---

### 3.4 Unnora

| Campo | Valor |
| --- | --- |
| Slug | `unnora` |
| Subtítulo | Aplicación web para gestión de eventos |
| Categoría | eventos — Gestión de eventos |
| Fecha | 2025 |
| Estado | completed |
| Destacado | sí |
| Caso de estudio | sí |
| Confidencial | no |
| Tecnologías | Angular, TypeScript, SCSS, Firebase |

**Descripción:** Aplicación web orientada a la organización, administración y seguimiento de eventos, con foco en una experiencia clara para usuarios y gestión eficiente desde el panel.

**Problema:** La organización y el seguimiento de eventos dependían de procesos dispersos y herramientas poco integradas, dificultando la administración y la experiencia de quienes participaban.

**Solución:** Desarrollé una aplicación web con flujos claros para usuarios y un panel administrativo para organizar eventos, gestionar información y dar seguimiento a cada etapa.

**Rol:** Desarrollador Frontend — diseño, implementación y despliegue.

**Impacto:** Gestión de eventos más ordenada, experiencia más clara para usuarios y administración más eficiente desde el panel.

**Funcionalidades:**

- Organización y administración de eventos
- Panel de gestión con seguimiento
- Experiencia clara para usuarios
- Diseño responsive
- Despliegue en Firebase Hosting

**Resultados:** Gestión de eventos · Panel administrativo · En producción

---

### 3.5 Carta Digital para Gastronomía

| Campo | Valor |
| --- | --- |
| Slug | `carta-digital-gastronomia` |
| Subtítulo | Aplicación web SPA con acceso por QR |
| Categoría | web — Web Apps |
| Fecha | 2025 |
| Estado | completed |
| Destacado | no |
| Caso de estudio | sí |
| Confidencial | no |
| Tecnologías | Angular, TypeScript, Firebase, QR Integration |

**Descripción:** Aplicación web SPA para cartas digitales de restaurantes con categorías, productos, imágenes y acceso rápido vía QR.

**Problema:** Los locales necesitaban actualizar menús físicos con frecuencia, con costo y demora, sin posibilidad de mostrar información dinámica.

**Solución:** Implementé una carta digital responsive accesible por QR, con gestión de categorías, productos y diseño adaptable a la identidad de cada local.

**Rol:** Desarrollador Full Stack — frontend, estructura de datos y despliegue.

**Impacto:** Actualización instantánea de menús, mejor experiencia para comensales y reducción de costos de impresión.

**Funcionalidades:**

- Carta digital accesible por QR
- Categorías y productos con imágenes
- Diseño responsive para móvil
- Actualización en tiempo real
- Multi-local

**Resultados:** Acceso por QR · Actualización instantánea · Enfoque mobile

---

### 3.6 Sitio Web de Servicios Locales

| Campo | Valor |
| --- | --- |
| Slug | `sitio-servicios-locales` |
| Subtítulo | Aplicación web con conversión geográfica |
| Categoría | web — Web Apps |
| Fecha | 2025 |
| Estado | completed |
| Destacado | no |
| Caso de estudio | sí |
| Confidencial | no |
| Tecnologías | Angular, TypeScript, SCSS, SEO Local |

**Descripción:** Sitio web de servicios con foco en conversión local, contacto inmediato y presencia optimizada para búsquedas geográficas.

**Problema:** El negocio dependía de referencias y no tenía presencia web optimizada para captar demanda de servicios de emergencia en su zona.

**Solución:** Desarrollé un sitio Angular con CTAs de contacto directo (teléfono/WhatsApp), secciones de servicios, testimonios y estructura SEO local.

**Rol:** Desarrollador Frontend — diseño, implementación y SEO on-page.

**Impacto:** Canal digital de captación activo, contacto inmediato desde móvil y mejor posicionamiento en búsquedas locales.

**Funcionalidades:**

- CTAs de contacto inmediato (teléfono/WhatsApp)
- Secciones de servicios y cobertura
- Diseño mobile-first
- SEO local optimizado
- Carga rápida

**Resultados:** Conversión local · Contacto inmediato · SEO geográfico

---

### 3.7 Automatizaciones Cloud & Lambdas

| Campo | Valor |
| --- | --- |
| Slug | `automatizaciones-cloud` |
| Subtítulo | Integraciones serverless y procesos automatizados |
| Categoría | automatizacion — Automatizaciones |
| Fecha | 2025 — Presente |
| Estado | production |
| Destacado | no |
| Caso de estudio | sí |
| Confidencial | no |
| GitHub | https://github.com/joaquin9830 |
| Tecnologías | AWS Lambda, Python, API Gateway, S3, CloudWatch |

**Descripción:** Conjunto de automatizaciones e integraciones con AWS Lambda, APIs y webhooks para procesos de negocio que requerían ejecución confiable sin intervención manual.

**Problema:** Procesos críticos de sincronización de datos, notificaciones y transformaciones se ejecutaban manualmente o con scripts frágiles sin monitoreo.

**Solución:** Diseñé e implementé funciones Lambda con triggers programados y por eventos, integraciones REST y manejo de errores con reintentos y logging.

**Rol:** Desarrollador Backend / Cloud — arquitectura serverless, integraciones y despliegue.

**Impacto:** Procesos automatizados 24/7, eliminación de tareas manuales repetitivas y mayor confiabilidad en sincronización de datos.

**Funcionalidades:**

- Funciones Lambda con triggers programados
- Integraciones REST entre sistemas
- Manejo de errores y reintentos
- Logging y monitoreo con CloudWatch
- Procesamiento de archivos en S3

**Resultados:** Serverless 24/7 · Integraciones confiables · Sin intervención manual

---

### 3.8 Asset huérfano (no publicado)

Existe la carpeta `assets/images/projects/sitio-institucional-b2b/` (cover, thumb, og, fallback y PNGs extra) **sin entrada** en `PROJECTS`. No aparece en el sitio.

También hay PNG genéricos `project-1.png` … `project-7.png` en `assets/images/projects/` que no usa el modelo actual.

---

## 4. Servicios

**Título de sección:** Lo que puedo construir o mejorar para tu equipo.

**Lead:** Cada servicio parte de un problema concreto y termina en una entrega medible.

| Servicio | Problema | Qué entrego | Enfoque técnico | Icono | Tecnologías |
| --- | --- | --- | --- | --- | --- |
| Aplicaciones web SPA empresariales | Equipos que operan con planillas, mails o sistemas desconectados. | SPA a medida con flujos, roles y módulos alineados al proceso. | Angular modular, arquitectura por dominio y despliegue escalable. | `bi-window-stack` | Angular, TypeScript, REST API |
| Frontend Angular profesional | Interfaces lentas, difíciles de mantener o sin estándar. | UI consistente, formularios reactivos y componentes reutilizables. | Design system propio, RxJS y código mantenible. | `bi-layout-text-window` | Angular, RxJS, SCSS |
| Integraciones API / Cloud | Sistemas que no se comunican o integraciones frágiles sin monitoreo. | Conectores seguros entre APIs, cloud y sistemas corporativos. | AWS Lambda, API Gateway, OAuth2 y logging. | `bi-plug` | AWS Lambda, Python, API Gateway |
| Automatización de procesos | Tareas repetitivas que consumen tiempo y generan errores manuales. | Flujos automatizados con triggers, webhooks y serverless. | Lambdas, S3, colas y orquestación 24/7. | `bi-lightning` | AWS Lambda, Python, CloudWatch |
| Optimización de productos existentes | Productos en producción con deuda técnica o UX degradada. | Mejoras incrementales: refactor, UX y performance. | Auditoría técnica, priorización por impacto e iteraciones. | `bi-speedometer2` | Angular, Performance, Refactoring |
| Documentación técnica y funcional | Conocimiento disperso que frena onboarding y decisiones. | Specs funcionales, diagramas y documentación de APIs. | Análisis funcional y documentación alineada al negocio. | `bi-journal-text` | Análisis funcional, Swagger, Confluence |

---

## 5. Formación / educación

Hay **inconsistencias de fechas** entre el listado home y las páginas de detalle. Se documentan ambas.

### 5.1 Universidad Tecnológica Nacional

| Campo | Home (`education.component.ts`) | Detalle (`/education-utn`) |
| --- | --- | --- |
| Título | Técnico Universitario en Programación | igual |
| Institución | Universidad Tecnológica Nacional | igual |
| Período | **2023 — 2024** | **2020 — 2023** |
| Tag | Base universitaria | Completado |
| Highlights home | Algoritmos, POO, Java, Python | — |

**Perfil (detalle):** Formación en análisis, diseño y desarrollo de soluciones informáticas con metodologías estructuradas para el procesamiento de datos.

**Competencias:**

- Análisis de problemas — selección de algoritmos y técnicas para resolver problemas de datos (`bi-search`)
- Desarrollo de programas — programación en lenguajes de alto nivel (`bi-code-slash`)
- Implementación técnica — desarrollo bajo especificaciones de análisis de sistemas (`bi-gear`)

**Tecnologías (detalle):** HTML5, CSS3, JavaScript · Java, Python · MySQL, PostgreSQL, Git, GitHub, Scrum

**SEO:** Título universitario UTN en programación: algoritmos, desarrollo con Java y Python, bases de datos y metodologías de software.

### 5.2 Alura Latam

| Campo | Home | Detalle (`/education-alura`) |
| --- | --- | --- |
| Título | Desarrollador Frontend | igual |
| Institución | Alura | Alura Latam — Plataforma online |
| Período | 2023 | 2023 · Completado |
| Tag | Frontend | — |
| Highlights home | Angular, TypeScript, Responsive | El detalle enseña HTML/CSS/JS/React, **no Angular** |

**Especialización:** Formación en desarrollo frontend moderno, enfocada en interfaces intuitivas y buenas prácticas de desarrollo web.

**Competencias:** Interfaces de usuario (HTML5/CSS3) · JavaScript moderno (ES6+, DOM, async) · React (componentes, Hooks, Router, SPA)

**Tecnologías (detalle):** HTML5, CSS3, Flexbox, Grid, Responsive · ES6+, DOM, Eventos, Async · React.js, React Router, Hooks

**SEO:** Especialización frontend en Alura Latam: HTML5, CSS3, JavaScript moderno y React con buenas prácticas de interfaces responsivas.

### 5.3 Argentina Programa

| Campo | Home | Detalle (`/education-detail`) |
| --- | --- | --- |
| Título | Desarrollador Web Full Stack | igual |
| Institución | Argentina Programa | Argentina Programa — Ministerio de Educación |
| Período | **2021 — 2022** | **2022 — 2023** |
| Tag | Full Stack | Certificado · 800+ horas |
| Highlights home | JavaScript, Node.js, MySQL, Git | — |

**Perfil:** Formación integral en desarrollo web completo: interfaces de usuario, servidores, bases de datos y seguridad de aplicaciones. Base sólida en tecnologías modernas y metodologías de desarrollo para crear soluciones web escalables y eficientes.

**Competencias:** Desarrollo frontend · Desarrollo backend (APIs RESTful, Node.js y Java) · Gestión de datos · Seguridad web

**Stack (detalle):** HTML5, CSS3, TypeScript, Angular, Bootstrap · Node.js, Java, Spring Boot · MySQL, Git, GitHub, Postman, Firebase, Heroku

**SEO:** Formación Full Stack en Argentina Programa: frontend, backend, bases de datos, seguridad web y stack con Angular, Node.js, Java y MySQL.

---

## 6. Habilidades (sección Capacidades)

**Título:** Stack y habilidades con foco profesional.

**Lead:** Organizadas por aporte al producto: frontend, backend, cloud, automatización e IA en producción.

Iconos: **Devicon 2.17.0** (CDN) o **Bootstrap Icons**. Angular usa `devicon-angular-plain` (no AngularJS). Angular, NestJS/Node/Python van con énfasis visual; React, Java y Spring Boot van como complementarios.

### 6.1 Frontend Engineering

*Interfaces modernas, modulares y mantenibles para aplicaciones web en producción.*

Angular · TypeScript · JavaScript · RxJS · Signals · Reactive Forms · Angular Material · HTML5 · CSS3 / SCSS · Responsive Design · SPA / PWA · React (complementario)

### 6.2 Backend & APIs

*Servicios backend, APIs e integraciones entre sistemas y aplicaciones.*

Node.js · NestJS · Python · REST APIs · SOAP APIs · OAuth2 · Java (complementario) · Spring Boot (complementario)

### 6.3 AI & Automation

*Agentes, automatización y herramientas de IA aplicadas a productos y procesos reales.*

AI Agents · Agentic Workflows · AI-Assisted Development · Prompt Engineering · Structured Outputs · Human-in-the-loop · Automation · Claude Code · Cursor · ChatGPT

### 6.4 Cloud & Data

*Infraestructura serverless, almacenamiento y persistencia para aplicaciones productivas.*

AWS Lambda · API Gateway · S3 · CloudWatch · PostgreSQL · MySQL · SQL Server · Prisma · Firebase

### 6.5 Testing & Delivery

*Calidad, observabilidad y entrega confiable de software.*

Unit Testing · Integration Testing · Functional Testing · Regression Testing · Postman · K6 · Debugging & Profiling · Git / GitHub · GitHub Actions · CI/CD · Docker

### 6.6 Producto / Análisis funcional

*Traducción de necesidades de negocio en soluciones técnicas implementables.*

Levantamiento de requerimientos · Historias de usuario · Criterios de aceptación · Documentación funcional · Documentación técnica · Diagramas de flujo · Estimación de esfuerzos · Comunicación con stakeholders · Jira · Scrum

---

## 7. Tecnologías (catálogo unificado)

Lista única de nombres que aparecen en el contenido publicado (proyectos, skills, servicios, educación, hero, footer).

### 7.1 En uso en el portfolio (contenido visible)

**Frontend:** Angular, TypeScript, JavaScript, RxJS, Reactive Forms, HTML5, CSS3, SCSS, Bootstrap, Flexbox, Grid, Responsive, React.js, React Router, Hooks, ES6+, DOM

**Backend / cloud:** Python, Node.js, Java, Spring Boot, AWS, AWS Lambda, API Gateway, S3, CloudWatch, REST API, REST / OAuth2, Firebase, Firebase Hosting, Heroku, QR Integration

**Datos y calidad:** MySQL, PostgreSQL, Lazy Loading, SEO Local, SEO on-page, Performance, Refactoring, Accesibilidad básica, Debugging & profiling

**Producto y proceso:** Análisis funcional, Levantamiento de requerimientos, Documentación funcional, Diagramas de flujo, Swagger, Confluence, Scrum, Git, GitHub, Postman, Formspree, VS Code / Cursor

### 7.2 Stack del propio sitio

Angular ~20 · TypeScript ~5.8 · Bootstrap 5 · Bootstrap Icons · Devicon (CDN v2.17.0) · Firebase Hosting · SCSS · RxJS · Formspree · Google Analytics `G-90RQR9E90X`

### 7.3 Por proyecto (matriz)

| Tecnología | Trámites | Ops internas | Gestión operativa | Unnora | Carta QR | Servicios locales | Lambdas |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Angular | ● | ● | ● | ● | ● | ● | |
| TypeScript | ● | ● | ● | ● | ● | ● | |
| RxJS | ● | | | | | | |
| REST API | ● | ● | | | | | |
| SCSS | ● | | ● | ● | | ● | |
| Lazy Loading | | ● | | | | | |
| AWS | | ● | | | | | |
| Firebase | | | ● | ● | ● | | |
| QR Integration | | | | | ● | | |
| SEO Local | | | | | | ● | |
| AWS Lambda | | | | | | | ● |
| Python | | | | | | | ● |
| API Gateway | | | | | | | ● |
| S3 | | | | | | | ● |
| CloudWatch | | | | | | | ● |

---

## 8. Iconos de tecnologías

Hay **tres sistemas** de iconos. No se mezclan en la misma sección.

### 8.1 Devicon (sección Habilidades + mapeo `DevIconsService`)

CDN: `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css`  
Paquete npm: `devicon` ^2.17.0 (no está en `angular.json` styles; el CSS llega por CDN).

**Usados en skills:**

| Clase Devicon | Dónde |
| --- | --- |
| `devicon-angularjs-plain colored` | Angular (nota: el slug moderno es `devicon-angular-plain`) |
| `devicon-typescript-plain colored` | TypeScript |
| `devicon-javascript-plain colored` | RxJS (aprox.) |
| `devicon-css3-plain colored` | CSS / SCSS |
| `devicon-python-plain colored` | Python |
| `devicon-amazonwebservices-original colored` | AWS Lambda y S3 / CloudWatch |
| `devicon-git-plain colored` | Git / GitHub |
| `devicon-firebase-plain colored` | Firebase Hosting |
| `devicon-bootstrap-plain colored` | Bootstrap |

**Mapa completo de `simple-icons.service.ts` (`DevIconsService`):** el componente `app-simple-icon` puede resolver estas claves. Hoy **no se usa en las secciones públicas** de home (skills usa clases hardcodeadas).

Frontend: `angular`, `typescript`, `rxjs`, `bootstrap`, `css3`, `html5`, `javascript`, `react`, `vue`

Backend / AWS: `python`, `amazonaws`, `nodejs`, `express`, `docker`, `aws-lambda`, `api-gateway`, `s3`, `custom-layers`

Bases de datos: `mysql`, `mongodb`, `postgresql`, `redis`

DevOps: `git`, `github`, `gitlab`, `nginx`, `ubuntu`, `linux`, `kubernetes`, `jenkins`

Herramientas: `vscode`, `intellij`, `figma`, `firebase`, `heroku`, `azure`, `google`, `slack`, `discord`, `trello`, `powerpoint`, `gitbook`, `markdown`, `npm`

Aliases de dominio (legado, no visibles en skills actuales): `reactive-forms`, `css-responsive`, `pypdf-library`, `hexagonal-pattern`, `microservices-architecture`, `cqrs-pattern`, `data-transfer-objects`, `domain-driven-design`, `beaware360-integration`, `oauth2-authentication`, `distributor-management`, `validation-component`, `http-requests`, `continuous-integration`, `configuration-management`, `automated-deployment`, `stakeholder-presentations`

Fallback si la clave no existe: `devicon-git-plain`.

### 8.2 Bootstrap Icons (UI + skills no-tech)

CSS: `node_modules/bootstrap-icons/font/bootstrap-icons.css`

**Skills (no Devicon):** `bi-ui-checks-grid`, `bi-diagram-3`, `bi-plug`, `bi-clipboard-data`, `bi-journal-text`, `bi-diagram-2`, `bi-people`, `bi-calendar-check`, `bi-cloud`, `bi-code-slash`, `bi-boxes`, `bi-speedometer`, `bi-search`, `bi-universal-access`, `bi-bug`, `bi-chat-dots`, `bi-lightbulb`, `bi-person-check`, `bi-arrow-repeat`

**Servicios:** `bi-window-stack`, `bi-layout-text-window`, `bi-plug`, `bi-lightning`, `bi-speedometer2`, `bi-journal-text`

**About:** `bi-diagram-3`, `bi-translate`, `bi-window-stack`, `bi-tools`

**Nav:** `bi-house`, `bi-person`, `bi-gear`, `bi-mortarboard`, `bi-code-slash`, `bi-folder`, `bi-envelope`

**Redes / contacto:** `bi-linkedin`, `bi-github`, `bi-envelope`, `bi-whatsapp`, `bi-geo-alt`, `bi-clock`, `bi-reply`, `bi-send`

### 8.3 PNG locales (`assets/icons/skills/`)

Usados en las **páginas de educación**, no en la sección Capacidades.

| Archivo | Etiqueta en UI |
| --- | --- |
| `html.png` | HTML5 |
| `css.png` | CSS3 |
| `javascript.png` | JavaScript / Eventos |
| `typescript.png` | TypeScript |
| `angular.png` | Angular |
| `bootstrap.png` | Bootstrap |
| `react.png` | React.js / Router / Hooks |
| `java.png` | Java |
| `python.png` | Python |
| `node-js.png` | Node.js |
| `spring.png` | Spring Boot |
| `mysql.png` | MySQL |
| `postgres.png` | PostgreSQL |
| `git.png` | Git |
| `github.png` | GitHub |
| `firebase.png` | Firebase |
| `heroku.png` | Heroku |
| `postman.png` | Postman |
| `scrum.png` | Scrum |
| `flexbox.png` | Flexbox |
| `grid.png` | Grid |
| `layout-responsive.png` | Responsive |
| `es6+.png` | ES6+ |
| `dom.png` | DOM |
| `javascript-asincrono.png` | Async |

**PNG presentes pero no referenciados** en las plantillas actuales: `comunicacion.png`, `emprendimiento.png`, `estructura-html.png`, `figma.png`, `foco.png`, `gestion.png`, `javascript-form.png`, `mongo-db.png`, `notion.png`, `organizacion-equipos.png`, `productividad.png`, `semantica.png`, `sqlite.png`, `trabajo-equipo.png`

**Otros iconos PNG:**

| Path | Uso |
| --- | --- |
| `assets/icons/hero/hero.png` | Logo header y footer |
| `assets/icons/services/frontend.png` | no usado en el HTML actual |
| `assets/icons/services/backend.png` | no usado |
| `assets/icons/services/database.png` | no usado |

---

## 9. Estructura del sitio

Orden de la home: Header → Banner → About → Experience → Services → Education → Skills → Projects → Contact → Footer → botón scroll.

| Ruta | Página |
| --- | --- |
| `/` y `/home` | Home |
| `/proyecto/:slug` | Caso de estudio |
| `/education-utn` | UTN |
| `/education-alura` | Alura |
| `/education-detail` | Argentina Programa |

Navegación: Inicio · Sobre Mí · Experiencia · Servicios · Educación · Habilidades · Proyectos · Contacto

---

## 10. Inconsistencias detectadas (para corregir después)

1. **UTN fechas:** home `2023 — 2024` vs detalle `2020 — 2023`.
2. **Argentina Programa fechas:** home `2021 — 2022` vs detalle `2022 — 2023`.
3. **Alura highlights vs detalle:** home dice Angular/TypeScript; la página de detalle es HTML/CSS/JS/React.
4. **Unnora highlights** dicen “En producción” pero el `status` es `completed`.
5. **Categoría `integracion`** sin proyectos.
6. **Carpeta `sitio-institucional-b2b`** sin proyecto en data.
7. **RxJS / Angular en skills:** resuelto — RxJS usa `devicon-rxjs-plain` y Angular usa `devicon-angular-plain` (Devicon 2.17.0).
8. *(reservado)*
9. **Métrica “7 proyectos”** coincide con `PROJECTS.length`.
10. `DevIconsService.getIconClass` hace `console.log` en cada lookup (ruido en consola si se usa el componente).
11. **Hero, about y footer** siguen diciendo “Desarrollador Angular / Full Stack”; SEO ya usa “Full Stack & AI Agent Developer”.
)
