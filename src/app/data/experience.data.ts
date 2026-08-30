import { Experience } from '../model/experience.model';

export const EXPERIENCES: Experience[] = [
  {
    id: 'uteam',
    company: 'Uteam',
    role: 'Full Stack Developer / Analista Funcional',
    period: 'Nov 2024 — Actualidad',
    current: true,
    description:
      'Desarrollo y mantenimiento de aplicaciones empresariales en producción para procesos críticos del sector seguros, utilizadas por más de 3.000 usuarios en Latinoamérica.',
    responsibilities: [
      'Desarrollo de soluciones frontend con Angular y TypeScript.',
      'Desarrollo de servicios backend/serverless con Python y AWS Lambda.',
      'Integración y mantenimiento de más de 20 APIs REST/SOAP.',
      'Implementación de autenticación, validaciones, manejo de errores, reintentos e integraciones con servicios externos.',
      'Participación desde el análisis funcional y diseño técnico hasta implementación, testing, despliegue productivo y soporte post-release.',
      'Traducción de necesidades de negocio en historias de usuario, soluciones técnicas y funcionalidades productivas.',
      'Participación en más de 30 despliegues productivos.',
      'Participación en más de 30 historias de usuario.',
      'Mejoras de performance superiores al 70% en escenarios seleccionados.',
      'Reducción aproximada del 80% de llamadas innecesarias en flujos optimizados.',
      'Trabajo con equipos y proyectos de México, Chile, Perú y Colombia.',
      'Construcción e integración de flujos con agentes de IA en portales web productivos.',
      'Integración entre lógica de aplicación, APIs, automatización y procesos impulsados por IA.'
    ],
    metrics: ['3.000+ usuarios', '20+ APIs', '30+ despliegues', '30+ HU', 'LATAM'],
    technologies: [
      'Angular',
      'TypeScript',
      'Python',
      'AWS Lambda',
      'API Gateway',
      'S3',
      'REST API',
      'SOAP API',
      'PostgreSQL',
      'SQL',
      'Git',
      'CI/CD',
      'AI Agents',
      'Agentic Workflows',
      'Automation'
    ]
  },
  {
    id: 'independiente',
    role: 'Desarrollador Full Stack Independiente',
    period: '2022 — 2024',
    description:
      'Desarrollo de aplicaciones web full stack, participando desde el relevamiento y diseño de solución hasta implementación, testing y entrega.',
    responsibilities: [
      'Desarrollo con Angular y TypeScript.',
      'Desarrollo backend con Node.js / NestJS.',
      'Experiencia complementaria con Java / Spring Boot.',
      'Implementación de APIs REST.',
      'Autenticación y validaciones.',
      'Persistencia de datos y bases relacionales.',
      'Desarrollo de interfaces responsivas.',
      'Integraciones frontend-backend.',
      'Testing y despliegue.'
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'Node.js',
      'NestJS',
      'Java',
      'Spring Boot',
      'MySQL',
      'PostgreSQL',
      'REST API',
      'Git',
      'Docker'
    ]
  }
];
