import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  tag: string;
  highlights: string[];
  route: string;
}

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css'],
    standalone: false
})
export class EducationComponent {
  educationItems: EducationItem[] = [
    {
      institution: 'Universidad Tecnológica Nacional',
      degree: 'Técnico Universitario en Programación',
      period: '2023 — 2024',
      tag: 'Base universitaria',
      highlights: ['Algoritmos', 'POO', 'Java', 'Python'],
      route: '/education-utn'
    },
    {
      institution: 'Alura',
      degree: 'Desarrollador Frontend',
      period: '2023',
      tag: 'Frontend',
      highlights: ['Angular', 'TypeScript', 'Responsive'],
      route: '/education-alura'
    },
    {
      institution: 'Argentina Programa',
      degree: 'Desarrollador Web Full Stack',
      period: '2021 — 2022',
      tag: 'Full Stack',
      highlights: ['JavaScript', 'Node.js', 'MySQL', 'Git'],
      route: '/education-detail'
    }
  ];

  constructor(private router: Router) {}

  goToDetail(route: string): void {
    this.router.navigate([route]);
  }
}
