import { Component } from '@angular/core';

interface SkillItem {
  name: string;
  icon: string;
  emphasis?: 'primary' | 'secondary';
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
      name: 'Frontend Engineering',
      description: 'Interfaces modernas, modulares y mantenibles para aplicaciones web en producción.',
      skills: [
        { name: 'Angular', icon: 'devicon-angular-plain colored', emphasis: 'primary' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'RxJS', icon: 'devicon-rxjs-plain colored' },
        { name: 'Signals', icon: 'bi bi-broadcast' },
        { name: 'Reactive Forms', icon: 'bi bi-ui-checks-grid' },
        { name: 'Angular Material', icon: 'devicon-angularmaterial-plain colored' },
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3 / SCSS', icon: 'devicon-css3-plain colored' },
        { name: 'Responsive Design', icon: 'bi bi-phone' },
        { name: 'SPA / PWA', icon: 'bi bi-window-stack' },
        { name: 'React', icon: 'devicon-react-original colored', emphasis: 'secondary' }
      ]
    },
    {
      name: 'Backend & APIs',
      description: 'Servicios backend, APIs e integraciones entre sistemas y aplicaciones.',
      skills: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored', emphasis: 'primary' },
        { name: 'NestJS', icon: 'devicon-nestjs-plain colored', emphasis: 'primary' },
        { name: 'Python', icon: 'devicon-python-plain colored', emphasis: 'primary' },
        { name: 'REST APIs', icon: 'bi bi-hdd-network' },
        { name: 'SOAP APIs', icon: 'bi bi-layers' },
        { name: 'OAuth2', icon: 'devicon-oauth-plain colored' },
        { name: 'Java', icon: 'devicon-java-plain colored', emphasis: 'secondary' },
        { name: 'Spring Boot', icon: 'devicon-spring-plain colored', emphasis: 'secondary' }
      ]
    },
    {
      name: 'AI & Automation',
      description: 'Agentes, automatización y herramientas de IA aplicadas a productos y procesos reales.',
      skills: [
        { name: 'AI Agents', icon: 'bi bi-cpu' },
        { name: 'Agentic Workflows', icon: 'bi bi-diagram-3' },
        { name: 'AI-Assisted Development', icon: 'bi bi-stars' },
        { name: 'Prompt Engineering', icon: 'bi bi-chat-square-text' },
        { name: 'Structured Outputs', icon: 'bi bi-braces' },
        { name: 'Human-in-the-loop', icon: 'bi bi-person-gear' },
        { name: 'Automation', icon: 'bi bi-lightning' },
        { name: 'Claude Code', icon: 'bi bi-terminal' },
        { name: 'Cursor', icon: 'bi bi-cursor' },
        { name: 'ChatGPT', icon: 'bi bi-chat-dots' }
      ]
    },
    {
      name: 'Cloud & Data',
      description: 'Infraestructura serverless, almacenamiento y persistencia para aplicaciones productivas.',
      skills: [
        { name: 'AWS Lambda', icon: 'devicon-amazonwebservices-original colored' },
        { name: 'API Gateway', icon: 'bi bi-diagram-3' },
        { name: 'S3', icon: 'bi bi-archive' },
        { name: 'CloudWatch', icon: 'bi bi-activity' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored' },
        { name: 'Prisma', icon: 'devicon-prisma-original colored' },
        { name: 'Firebase', icon: 'devicon-firebase-plain colored' }
      ]
    },
    {
      name: 'Testing & Delivery',
      description: 'Calidad, observabilidad y entrega confiable de software.',
      skills: [
        { name: 'Unit Testing', icon: 'bi bi-check2-square' },
        { name: 'Integration Testing', icon: 'bi bi-intersect' },
        { name: 'Functional Testing', icon: 'bi bi-clipboard-check' },
        { name: 'Regression Testing', icon: 'bi bi-arrow-repeat' },
        { name: 'Postman', icon: 'devicon-postman-plain colored' },
        { name: 'K6', icon: 'devicon-k6-original colored' },
        { name: 'Debugging & Profiling', icon: 'bi bi-bug' },
        { name: 'Git / GitHub', icon: 'devicon-git-plain colored' },
        { name: 'GitHub Actions', icon: 'devicon-githubactions-plain colored' },
        { name: 'CI/CD', icon: 'bi bi-gear-wide-connected' },
        { name: 'Docker', icon: 'devicon-docker-plain colored' }
      ]
    },
    {
      name: 'Producto / Análisis funcional',
      description: 'Traducción de necesidades de negocio en soluciones técnicas implementables.',
      skills: [
        { name: 'Levantamiento de requerimientos', icon: 'bi bi-clipboard-data' },
        { name: 'Historias de usuario', icon: 'bi bi-card-checklist' },
        { name: 'Criterios de aceptación', icon: 'bi bi-check2-circle' },
        { name: 'Documentación funcional', icon: 'bi bi-journal-text' },
        { name: 'Documentación técnica', icon: 'bi bi-file-earmark-code' },
        { name: 'Diagramas de flujo', icon: 'bi bi-diagram-2' },
        { name: 'Estimación de esfuerzos', icon: 'bi bi-calendar-check' },
        { name: 'Comunicación con stakeholders', icon: 'bi bi-people' },
        { name: 'Jira', icon: 'devicon-jira-plain colored' },
        { name: 'Scrum', icon: 'bi bi-kanban' }
      ]
    }
  ];
}
