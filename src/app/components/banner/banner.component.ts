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
    { value: '4+ años', label: 'desarrollo de software' },
    { value: '3.000+', label: 'usuarios en producción' },
    { value: '20+', label: 'APIs e integraciones' },
    { value: '30+', label: 'despliegues productivos' }
  ];

  readonly cvUrl = CV_PATH;

  readonly profileTechBadges = ['Angular', 'NestJS', 'Python', 'AWS', 'AI Agents'];

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
