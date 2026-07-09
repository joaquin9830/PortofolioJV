import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { CV_PATH } from '../../constants/site.constants';
import { NavigationScrollService } from '../../service/navigation-scroll.service';
import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-education-utn',
  templateUrl: './education-utn.component.html',
  styleUrls: []
})
export class EducationUtnComponent implements OnInit {
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
      'Técnico Universitario en Programación — UTN',
      'Título universitario UTN en programación: algoritmos, desarrollo con Java y Python, bases de datos y metodologías de software.',
      '/education-utn'
    );
  }

  goBack(): void {
    this.navigationScroll.backOrHome('education');
  }
}
