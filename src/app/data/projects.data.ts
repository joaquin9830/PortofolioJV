import { Project, ProjectCategoryFilter } from '../model/project.model';
import { buildProjectImagePaths } from '../utils/project-images.util';

export const PROJECT_CATEGORIES: ProjectCategoryFilter[] = [
  { id: 'all', name: 'Todos', icon: 'bi-grid-3x3' },
  { id: 'portal', name: 'Aplicaciones SPA', icon: 'bi-window-stack' },
  { id: 'integracion', name: 'Integraciones', icon: 'bi-plug' },
  { id: 'automatizacion', name: 'Automatizaciones', icon: 'bi-lightning' },
  { id: 'web', name: 'Web Apps', icon: 'bi-globe' },
  { id: 'eventos', name: 'Gestión de eventos', icon: 'bi-calendar-event' }
];

function img(slug: string, title: string) {
  return buildProjectImagePaths(slug, title);
}

export const PROJECTS: Project[] = [
  {
    slug: 'app-spa-gestion-tramites',
    title: 'Aplicación Web SPA para Gestión de Trámites',
    subtitle: 'Sistema SPA para flujos operativos y validaciones de negocio',
    description:
      'Aplicación web full stack SPA para gestión de trámites, emisión y seguimiento de operaciones con flujos complejos y validaciones regulatorias en entorno privado.',
    problem:
      'El proceso operativo dependía de múltiples sistemas desconectados, generando demoras, errores manuales y mala experiencia para equipos internos y usuarios finales.',
    solution:
      'Diseñé e implementé una aplicación Angular modular con flujos guiados, validaciones en tiempo real, integración con servicios backend y arquitectura preparada para escalar nuevos módulos.',
    role: 'Desarrollador Angular / Full Stack — arquitectura frontend, integraciones API y flujos de negocio.',
    impact:
      'Reducción del tiempo de tramitación, menor tasa de errores operativos y base escalable para incorporar nuevos procesos.',
    ...img('app-spa-gestion-tramites', 'Aplicación Web SPA para Gestión de Trámites'),
    category: 'portal',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'REST API', 'SCSS'],
    date: '2025 — Presente',
    status: 'production',
    featured: true,
    hasCaseStudy: true,
    confidential: true,
    features: [
      'Flujos multi-paso con validaciones en tiempo real',
      'Integración con servicios de pricing y emisión',
      'Gestión de estados operativos en tiempo real',
      'Arquitectura modular por dominio de negocio',
      'UI responsive para operación y backoffice'
    ],
    highlights: ['SPA en producción', 'Flujos de negocio complejos', 'Arquitectura escalable']
  },
  {
    slug: 'app-fullstack-operaciones-internas',
    title: 'Aplicación Web Full Stack para Operaciones Internas',
    subtitle: 'Evolución de plataforma SPA para operaciones de alto volumen',
    description:
      'Segunda generación de aplicación web full stack SPA con mejoras de arquitectura, performance y experiencia de usuario para operaciones internas en entorno privado.',
    problem:
      'La plataforma original no escalaba para nuevos módulos ni soportaba la carga operativa creciente sin degradar la experiencia de usuario.',
    solution:
      'Reestructuré módulos Angular, optimicé cargas lazy, mejoré la capa de integración con APIs y estandaricé componentes reutilizables para acelerar el desarrollo de nuevas funcionalidades.',
    role: 'Desarrollador Angular — refactor arquitectónico, performance y nuevas features.',
    impact:
      'Tiempos de carga reducidos, mayor velocidad de desarrollo de features y plataforma preparada para nuevos módulos de producto.',
    ...img('app-fullstack-operaciones-internas', 'Aplicación Web Full Stack para Operaciones Internas'),
    category: 'portal',
    technologies: ['Angular', 'TypeScript', 'Lazy Loading', 'REST API', 'AWS'],
    date: '2026 — Presente',
    status: 'production',
    featured: true,
    hasCaseStudy: true,
    confidential: true,
    features: [
      'Lazy loading de módulos por dominio',
      'Componentes compartidos entre aplicaciones SPA',
      'Optimización de bundles y performance',
      'Integración con servicios cloud',
      'Dashboard operativo para seguimiento'
    ],
    highlights: ['Segunda generación en producción', 'Performance optimizada', 'Componentes reutilizables']
  },
  {
    slug: 'plataforma-gestion-operativa',
    title: 'Plataforma Web de Gestión Operativa',
    subtitle: 'Sistema SPA para seguimiento de procesos internos',
    description:
      'Plataforma web de gestión para operaciones internas y seguimiento de procesos de negocio con panel administrativo y flujos de trabajo definidos.',
    problem:
      'La operación diaria requería coordinar información dispersa en planillas y herramientas sin integración, dificultando el seguimiento y la toma de decisiones.',
    solution:
      'Desarrollé una aplicación web SPA con panel de control, gestión de entidades, filtros avanzados y reportes visuales para centralizar la operación.',
    role: 'Desarrollador Full Stack — frontend Angular, integraciones y lógica de negocio.',
    impact:
      'Centralización de la operación, visibilidad en tiempo real del estado de procesos y reducción de trabajo manual repetitivo.',
    ...img('plataforma-gestion-operativa', 'Plataforma Web de Gestión Operativa'),
    category: 'web',
    technologies: ['Angular', 'TypeScript', 'Firebase', 'SCSS'],
    date: '2026',
    status: 'completed',
    featured: true,
    hasCaseStudy: true,
    confidential: true,
    features: [
      'Panel administrativo con métricas',
      'CRUD completo de entidades operativas',
      'Filtros y búsqueda avanzada',
      'Diseño responsive mobile-first',
      'Autenticación y roles de usuario'
    ],
    highlights: ['Operación centralizada', 'Panel administrativo', 'Mobile-first']
  },
  {
    slug: 'unnora',
    title: 'Unnora',
    subtitle: 'Aplicación web para gestión de eventos',
    description:
      'Aplicación web orientada a la organización, administración y seguimiento de eventos, con foco en una experiencia clara para usuarios y gestión eficiente desde el panel.',
    problem:
      'La organización y el seguimiento de eventos dependían de procesos dispersos y herramientas poco integradas, dificultando la administración y la experiencia de quienes participaban.',
    solution:
      'Desarrollé una aplicación web con flujos claros para usuarios y un panel administrativo para organizar eventos, gestionar información y dar seguimiento a cada etapa.',
    role: 'Desarrollador Frontend — diseño, implementación y despliegue.',
    impact:
      'Gestión de eventos más ordenada, experiencia más clara para usuarios y administración más eficiente desde el panel.',
    ...img('unnora', 'Unnora — Gestión de eventos'),
    category: 'eventos',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'Firebase'],
    date: '2025',
    status: 'completed',
    featured: true,
    hasCaseStudy: true,
    features: [
      'Organización y administración de eventos',
      'Panel de gestión con seguimiento',
      'Experiencia clara para usuarios',
      'Diseño responsive',
      'Despliegue en Firebase Hosting'
    ],
    highlights: ['Gestión de eventos', 'Panel administrativo', 'En producción']
  },
  {
    slug: 'carta-digital-gastronomia',
    title: 'Carta Digital para Gastronomía',
    subtitle: 'Aplicación web SPA con acceso por QR',
    description:
      'Aplicación web SPA para cartas digitales de restaurantes con categorías, productos, imágenes y acceso rápido vía QR.',
    problem:
      'Los locales necesitaban actualizar menús físicos con frecuencia, con costo y demora, sin posibilidad de mostrar información dinámica.',
    solution:
      'Implementé una carta digital responsive accesible por QR, con gestión de categorías, productos y diseño adaptable a la identidad de cada local.',
    role: 'Desarrollador Full Stack — frontend, estructura de datos y despliegue.',
    impact:
      'Actualización instantánea de menús, mejor experiencia para comensales y reducción de costos de impresión.',
    ...img('carta-digital-gastronomia', 'Carta Digital para Gastronomía'),
    category: 'web',
    technologies: ['Angular', 'TypeScript', 'Firebase', 'QR Integration'],
    date: '2025',
    status: 'completed',
    featured: false,
    hasCaseStudy: true,
    features: [
      'Carta digital accesible por QR',
      'Categorías y productos con imágenes',
      'Diseño responsive para móvil',
      'Actualización en tiempo real',
      'Multi-local'
    ],
    highlights: ['Acceso por QR', 'Actualización instantánea', 'Enfoque mobile']
  },
  {
    slug: 'sitio-servicios-locales',
    title: 'Sitio Web de Servicios Locales',
    subtitle: 'Aplicación web con conversión geográfica',
    description:
      'Sitio web de servicios con foco en conversión local, contacto inmediato y presencia optimizada para búsquedas geográficas.',
    problem:
      'El negocio dependía de referencias y no tenía presencia web optimizada para captar demanda de servicios de emergencia en su zona.',
    solution:
      'Desarrollé un sitio Angular con CTAs de contacto directo (teléfono/WhatsApp), secciones de servicios, testimonios y estructura SEO local.',
    role: 'Desarrollador Frontend — diseño, implementación y SEO on-page.',
    impact:
      'Canal digital de captación activo, contacto inmediato desde móvil y mejor posicionamiento en búsquedas locales.',
    ...img('sitio-servicios-locales', 'Sitio Web de Servicios Locales'),
    category: 'web',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'SEO Local'],
    date: '2025',
    status: 'completed',
    featured: false,
    hasCaseStudy: true,
    features: [
      'CTAs de contacto inmediato (teléfono/WhatsApp)',
      'Secciones de servicios y cobertura',
      'Diseño mobile-first',
      'SEO local optimizado',
      'Carga rápida'
    ],
    highlights: ['Conversión local', 'Contacto inmediato', 'SEO geográfico']
  },
  {
    slug: 'automatizaciones-cloud',
    title: 'Automatizaciones Cloud & Lambdas',
    subtitle: 'Integraciones serverless y procesos automatizados',
    description:
      'Conjunto de automatizaciones e integraciones con AWS Lambda, APIs y webhooks para procesos de negocio que requerían ejecución confiable sin intervención manual.',
    problem:
      'Procesos críticos de sincronización de datos, notificaciones y transformaciones se ejecutaban manualmente o con scripts frágiles sin monitoreo.',
    solution:
      'Diseñé e implementé funciones Lambda con triggers programados y por eventos, integraciones REST y manejo de errores con reintentos y logging.',
    role: 'Desarrollador Backend / Cloud — arquitectura serverless, integraciones y despliegue.',
    impact:
      'Procesos automatizados 24/7, eliminación de tareas manuales repetitivas y mayor confiabilidad en sincronización de datos.',
    ...img('automatizaciones-cloud', 'Automatizaciones Cloud & Lambdas'),
    github: 'https://github.com/joaquin9830',
    category: 'automatizacion',
    technologies: ['AWS Lambda', 'Python', 'API Gateway', 'S3', 'CloudWatch'],
    date: '2025 — Presente',
    status: 'production',
    featured: false,
    hasCaseStudy: true,
    features: [
      'Funciones Lambda con triggers programados',
      'Integraciones REST entre sistemas',
      'Manejo de errores y reintentos',
      'Logging y monitoreo con CloudWatch',
      'Procesamiento de archivos en S3'
    ],
    highlights: ['Serverless 24/7', 'Integraciones confiables', 'Sin intervención manual']
  }
];
