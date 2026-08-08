import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { CV_PATH } from '../../constants/site.constants';
import { NavigationScrollService } from '../../service/navigation-scroll.service';
import { SeoService } from '../../service/seo.service';

@Component({
    selector: 'app-education-detail',
    templateUrl: './education-detail.component.html',
    styleUrls: [],
    standalone: false
})
export class EducationDetailComponent implements OnInit {
  readonly cvPath = CV_PATH;

  constructor(
    private router: Router,
    private seoService: SeoService,
    private navigationScroll: NavigationScrollService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.seoService.updateForEducation(
      'Desarrollador Web Full Stack — Argentina Programa',
      'Formación Full Stack en Argentina Programa: frontend, backend, bases de datos, seguridad web y stack con Angular, Node.js, Java y MySQL.',
      '/education-detail'
    );
  }

  goBack(): void {
    this.navigationScroll.backOrHome('education');
  }
}
