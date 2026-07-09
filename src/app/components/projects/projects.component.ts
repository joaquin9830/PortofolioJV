import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../model/project.model';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('projectModal') projectModalRef?: ElementRef<HTMLElement>;

  featuredProjects: Project[] = [];
  allProjects: Project[] = [];
  categories = this.projectService.getCategories();
  activeCategory = 'all';
  selectedProject: Project | null = null;
  githubProfile = 'https://github.com/joaquin9830';

  private modalTriggerElement: HTMLElement | null = null;

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}

  get filteredProjects(): Project[] {
    if (this.activeCategory === 'all') {
      return this.allProjects;
    }
    return this.allProjects.filter(p => p.category === this.activeCategory);
  }

  ngOnInit(): void {
    this.featuredProjects = this.projectService.getFeatured();
    this.allProjects = this.projectService.getAll();
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeProjectModal();
  }

  filterProjects(categoryId: string): void {
    this.activeCategory = categoryId;
  }

  getCategoryName(categoryId: string): string {
    return this.projectService.getCategoryName(categoryId);
  }

  getStatusLabel(status: Project['status']): string {
    return this.projectService.getStatusLabel(status);
  }

  openProjectModal(project: Project, event?: Event): void {
    this.modalTriggerElement = (event?.currentTarget as HTMLElement) ?? null;
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      const closeBtn = this.projectModalRef?.nativeElement.querySelector<HTMLElement>('.modal-close');
      closeBtn?.focus();
    });
  }

  closeProjectModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
    this.modalTriggerElement?.focus();
    this.modalTriggerElement = null;
  }

  goToCaseStudy(slug: string): void {
    this.closeProjectModal();
    this.router.navigate(['/proyecto', slug]);
  }

  hasExternalLinks(project: Project): boolean {
    return !!(project.website || project.github);
  }
}
