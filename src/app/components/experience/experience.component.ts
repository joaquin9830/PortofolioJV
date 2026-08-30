import { Component } from '@angular/core';
import { EXPERIENCES } from '../../data/experience.data';
import { Experience } from '../../model/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  standalone: false
})
export class ExperienceComponent {
  experiences: Experience[] = EXPERIENCES;
}
