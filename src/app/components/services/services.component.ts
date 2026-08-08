import { Component } from '@angular/core';

interface Service {
  title: string;
  problem: string;
  deliverable: string;
  approach: string;
  icon: string;
  technologies: string[];
}

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css'],
    standalone: false
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Aplicaciones web SPA empresariales',
      problem: 'Equipos que operan con planillas, mails o sistemas desconectados.',
      deliverable: 'SPA a medida con flujos, roles y módulos alineados al proceso.',
      approach: 'Angular modular, arquitectura por dominio y despliegue escalable.',
      icon: 'bi-window-stack',
      technologies: ['Angular', 'TypeScript', 'REST API']
    },
    {
      title: 'Frontend Angular profesional',
      problem: 'Interfaces lentas, difíciles de mantener o sin estándar.',
      deliverable: 'UI consistente, formularios reactivos y componentes reutilizables.',
      approach: 'Design system propio, RxJS y código mantenible.',
      icon: 'bi-layout-text-window',
      technologies: ['Angular', 'RxJS', 'SCSS']
    },
    {
      title: 'Integraciones API / Cloud',
      problem: 'Sistemas que no se comunican o integraciones frágiles sin monitoreo.',
      deliverable: 'Conectores seguros entre APIs, cloud y sistemas corporativos.',
      approach: 'AWS Lambda, API Gateway, OAuth2 y logging.',
      icon: 'bi-plug',
      technologies: ['AWS Lambda', 'Python', 'API Gateway']
    },
    {
      title: 'Automatización de procesos',
      problem: 'Tareas repetitivas que consumen tiempo y generan errores manuales.',
      deliverable: 'Flujos automatizados con triggers, webhooks y serverless.',
      approach: 'Lambdas, S3, colas y orquestación 24/7.',
      icon: 'bi-lightning',
      technologies: ['AWS Lambda', 'Python', 'CloudWatch']
    },
    {
      title: 'Optimización de productos existentes',
      problem: 'Productos en producción con deuda técnica o UX degradada.',
      deliverable: 'Mejoras incrementales: refactor, UX y performance.',
      approach: 'Auditoría técnica, priorización por impacto e iteraciones.',
      icon: 'bi-speedometer2',
      technologies: ['Angular', 'Performance', 'Refactoring']
    },
    {
      title: 'Documentación técnica y funcional',
      problem: 'Conocimiento disperso que frena onboarding y decisiones.',
      deliverable: 'Specs funcionales, diagramas y documentación de APIs.',
      approach: 'Análisis funcional y documentación alineada al negocio.',
      icon: 'bi-journal-text',
      technologies: ['Análisis funcional', 'Swagger', 'Confluence']
    }
  ];
}
