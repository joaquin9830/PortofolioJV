import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { CONFIDENTIALITY_NOTICE } from '../../constants/site.constants';
import { Project } from '../../model/project.model';
import { NavigationScrollService } from '../../service/navigation-scroll.service';
import { ProjectService } from '../../service/project.service';
import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project | null = null;
  readonly confidentialityNotice = CONFIDENTIALITY_NOTICE;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private seoService: SeoService,
    private navigationScroll: NavigationScrollService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (!slug) {
      this.router.navigate(['/']);
      return;
    }

    const project = this.projectService.getBySlug(slug);
    if (!project || !project.hasCaseStudy) {
      this.router.navigate(['/']);
      return;
    }

    this.project = project;
    this.viewportScroller.scrollToPosition([0, 0]);
    this.seoService.updateForProject(
      project.title,
      `${project.description} ${project.impact}`,
      project.slug,
      project.ogImage
    );
  }

  getCategoryName(categoryId: string): string {
    return this.projectService.getCategoryName(categoryId);
  }

  getStatusLabel(status: Project['status']): string {
    return this.projectService.getStatusLabel(status);
  }

  goBack(): void {
    this.navigationScroll.backOrHome('projects');
  }
}
