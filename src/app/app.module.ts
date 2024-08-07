import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Inicio Services
import {CargarScriptsService} from '../app/service/cargar-scripts.service';
//Fin services
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import {HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationDetailComponent } from './pages/education-detail/education-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { EducationCrimiComponent } from './pages/education-crimi/education-crimi.component';
import { EducationAluraComponent } from './pages/education-alura/education-alura.component';
import { EducationUtnComponent } from './pages/education-utn/education-utn.component';
import { ButtonScrollComponent } from './components/button-scroll/button-scroll.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServicesComponent } from './components/services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationDetailComponent,
    HomeComponent,
    EducationCrimiComponent,
    EducationAluraComponent,
    EducationUtnComponent,
    ButtonScrollComponent,
    BannerComponent,
    ServicesComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
