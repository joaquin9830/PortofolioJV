import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setHomeDefaults();
  }
}
