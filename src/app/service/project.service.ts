import { Injectable } from '@angular/core';
import { Project, ProjectCategoryFilter } from '../model/project.model';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects.data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  getAll(): Project[] {
    return PROJECTS;
  }

  getFeatured(): Project[] {
    return PROJECTS.filter(p => p.featured);
  }

  getBySlug(slug: string): Project | undefined {
    return PROJECTS.find(p => p.slug === slug);
  }

  getCategories(): ProjectCategoryFilter[] {
    return PROJECT_CATEGORIES;
  }

  getCategoryName(categoryId: string): string {
    const category = PROJECT_CATEGORIES.find(c => c.id === categoryId);
    return category ? category.name : 'Otro';
  }

  getStatusLabel(status: Project['status']): string {
    const labels: Record<Project['status'], string> = {
      completed: 'Completado',
      'in-progress': 'En desarrollo',
      production: 'En producción'
    };
    return labels[status];
  }
}
