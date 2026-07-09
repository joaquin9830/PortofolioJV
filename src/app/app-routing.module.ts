import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationDetailComponent } from './pages/education-detail/education-detail.component';
import { EducationAluraComponent } from './pages/education-alura/education-alura.component';
import { HomeComponent } from './pages/home/home.component';
import { EducationUtnComponent } from './pages/education-utn/education-utn.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';


const routes: Routes = [
  {path:'', component:HomeComponent}, 
  {path:'home', component:HomeComponent},
  {path:'proyecto/:slug', component: ProjectDetailComponent},
  {path:'education-detail',component:EducationDetailComponent},
  {path:'education-alura',component:EducationAluraComponent},
  {path:'education-utn', component:EducationUtnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 80]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
