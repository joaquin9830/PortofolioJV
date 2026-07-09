import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { CV_PATH } from '../../constants/site.constants';
import { NavigationScrollService } from '../../service/navigation-scroll.service';
import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-education-alura',
  templateUrl: './education-alura.component.html',
  styleUrls: []
})
export class EducationAluraComponent implements OnInit {
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
      'Desarrollador Frontend — Alura Latam',
      'Especialización frontend en Alura Latam: HTML5, CSS3, JavaScript moderno y React con buenas prácticas de interfaces responsivas.',
      '/education-alura'
    );
  }

  goBack(): void {
    this.navigationScroll.backOrHome('education');
  }
}
