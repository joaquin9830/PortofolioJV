import { Component } from '@angular/core';
import { CV_PATH } from '../../constants/site.constants';

interface ValueBlock {
  icon: string;
  title: string;
  description: string;
}

interface Pillar {
  label: string;
  value: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  readonly cvUrl = CV_PATH;

  pillars: Pillar[] = [
    { value: 'Angular / Full Stack', label: 'enfoque principal' },
    { value: 'Análisis funcional', label: 'antes de escribir código' },
    { value: 'SPA & cloud', label: 'soluciones en producción' },
    { value: 'Mantenibilidad', label: 'código y documentación' }
  ];

  valueBlocks: ValueBlock[] = [
    {
      icon: 'bi-diagram-3',
      title: 'Entiendo procesos de negocio',
      description: 'Trabajo con requerimientos reales. Identifico el problema, los actores y el impacto operativo antes de proponer una solución técnica.'
    },
    {
      icon: 'bi-translate',
      title: 'Traduzco necesidades en soluciones',
      description: 'Convierto pedidos funcionales en arquitectura clara: módulos, flujos, integraciones y entregables que el equipo y el negocio pueden seguir.'
    },
    {
      icon: 'bi-window-stack',
      title: 'Construyo aplicaciones mantenibles',
      description: 'Desarrollo frontend Angular, integraciones API/cloud y automatizaciones con código legible y foco en evolución a largo plazo.'
    },
    {
      icon: 'bi-tools',
      title: 'Mejoro lo que ya existe',
      description: 'Optimizo productos en producción: performance, UX, deuda técnica y nuevas funcionalidades sin romper lo operativo.'
    }
  ];
}
