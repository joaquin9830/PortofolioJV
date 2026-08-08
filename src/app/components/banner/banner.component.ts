import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project.model';
import { ProjectService } from '../../service/project.service';
import { CV_PATH } from '../../constants/site.constants';

interface HeroMetric {
  value: string;
  label: string;
}

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css'],
    standalone: false
})
export class BannerComponent implements OnInit {
  featuredProjects: Project[] = [];

  metrics: HeroMetric[] = [
    { value: '+3 años', label: 'usando Angular' },
    { value: '7', label: 'proyectos documentados' },
    { value: 'SPA & cloud', label: 'integraciones reales' },
    { value: 'Frontend +', label: 'análisis funcional' }
  ];

  readonly cvUrl = CV_PATH;

  readonly profileTechBadges = ['Angular', 'TypeScript', 'APIs', 'AWS'];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.featuredProjects = this.projectService.getFeatured().slice(0, 3);
  }

  getCategoryName(categoryId: string): string {
    return this.projectService.getCategoryName(categoryId);
  }

  scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
