import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillsSections = [
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', image: 'assets/icons/skills/angular.png' },
        { name: 'React', image: 'assets/icons/skills/react.png' },
        { name: 'HTML', image: 'assets/icons/skills/html.png' },
        { name: 'CSS', image: 'assets/icons/skills/css.png' },
        { name: 'JavaScript', image: 'assets/icons/skills/javascript.png' },
        { name: 'TypeScript', image: 'assets/icons/skills/typescript.png' },
        
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Java', image: 'assets/icons/skills/java.png' },
        { name: 'Spring Boot', image: 'assets/icons/skills/spring.png' },
        { name: 'Python', image: 'assets/icons/skills/python.png' },
        { name: 'Node.js', image: 'assets/icons/skills/node-js.png' },
       
       
      ]
    },
    {
      name: 'DB',
      skills: [
        { name: 'MySQL', image: 'assets/icons/skills/mysql.png' },       
        { name: 'PostgreSQL', image: 'assets/icons/skills/postgres.png' },
        
      ]
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git', image: 'assets/icons/skills/git.png' },
        { name: 'Github', image: 'assets/icons/skills/github.png' },
        { name: 'Postman', image: 'assets/icons/skills/postman.png' },
        { name: 'Figma', image: 'assets/icons/skills/figma.png' },
        { name: 'Bootstrap', image: 'assets/icons/skills/bootstrap.png' },
        { name: 'Notion', image: 'assets/icons/skills/notion.png' },
        
      ]
    },
    {
      name: 'PaaS',
      skills: [
        { name: 'Firebase', image: 'assets/icons/skills/firebase.png' },
        { name: 'Heroku', image: 'assets/icons/skills/heroku.png' },               
      ]
    },
    {
      name: 'Habilidades blandas', 
      skills: [
        { name: 'Productividad', image: 'assets/icons/skills/productividad.png' },
        { name: 'Eficiencia', image: 'assets/icons/skills/foco.png' },
        { name: 'Scrum', image: 'assets/icons/skills/scrum.png' },
        { name: 'Comunicación', image: 'assets/icons/skills/comunicacion.png' },
        { name: 'Trabajo en equipo', image: 'assets/icons/skills/trabajo-equipo.png' },
        
      ]
    }
  ];
}
