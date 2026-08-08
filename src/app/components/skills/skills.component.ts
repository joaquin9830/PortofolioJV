import { Component } from '@angular/core';

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillCategory {
  name: string;
  description: string;
  skills: SkillItem[];
}

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
    standalone: false
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      name: 'Frontend',
      description: 'Interfaces modulares, mantenibles y orientadas a producto.',
      skills: [
        { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'RxJS', icon: 'devicon-javascript-plain colored' },
        { name: 'Reactive Forms', icon: 'bi-ui-checks-grid' },
        { name: 'CSS / SCSS Responsive', icon: 'devicon-css3-plain colored' }
      ]
    },
    {
      name: 'Backend / Cloud',
      description: 'Integraciones, serverless y servicios en producción.',
      skills: [
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'AWS Lambda', icon: 'devicon-amazonwebservices-original colored' },
        { name: 'API Gateway', icon: 'bi-diagram-3' },
        { name: 'S3 / CloudWatch', icon: 'devicon-amazonwebservices-original colored' },
        { name: 'REST / OAuth2', icon: 'bi-plug' }
      ]
    },
    {
      name: 'Producto / Análisis funcional',
      description: 'Traducción de requerimientos y alineación con negocio.',
      skills: [
        { name: 'Levantamiento de requerimientos', icon: 'bi-clipboard-data' },
        { name: 'Documentación funcional', icon: 'bi-journal-text' },
        { name: 'Diagramas de flujo', icon: 'bi-diagram-2' },
        { name: 'Comunicación con stakeholders', icon: 'bi-people' },
        { name: 'Estimación de esfuerzos', icon: 'bi-calendar-check' }
      ]
    },
    {
      name: 'Herramientas modernas',
      description: 'Stack de desarrollo y despliegue del día a día.',
      skills: [
        { name: 'Git / GitHub', icon: 'devicon-git-plain colored' },
        { name: 'Firebase Hosting', icon: 'devicon-firebase-plain colored' },
        { name: 'Formspree / APIs', icon: 'bi-cloud' },
        { name: 'VS Code / Cursor', icon: 'bi-code-slash' },
        { name: 'Bootstrap (layout)', icon: 'devicon-bootstrap-plain colored' }
      ]
    },
    {
      name: 'Testing / Performance',
      description: 'Calidad, optimización y entregas confiables.',
      skills: [
        { name: 'Lazy loading / code splitting', icon: 'bi-boxes' },
        { name: 'Optimización de bundles', icon: 'bi-speedometer' },
        { name: 'SEO on-page', icon: 'bi-search' },
        { name: 'Accesibilidad básica', icon: 'bi-universal-access' },
        { name: 'Debugging & profiling', icon: 'bi-bug' }
      ]
    },
    {
      name: 'Habilidades blandas',
      description: 'Competencias que sostienen la entrega técnica y el trabajo con el equipo.',
      skills: [
        { name: 'Comunicación clara', icon: 'bi-chat-dots' },
        { name: 'Trabajo colaborativo', icon: 'bi-people' },
        { name: 'Resolución de problemas', icon: 'bi-lightbulb' },
        { name: 'Autonomía y proactividad', icon: 'bi-person-check' },
        { name: 'Adaptabilidad', icon: 'bi-arrow-repeat' }
      ]
    }
  ];
}
