import { Component, Input } from '@angular/core';
import { Project } from '../../model/project.model';
import { getProjectImageDimensions } from '../../utils/project-images.util';

export type ProjectImageVariant = 'thumb' | 'cover';

@Component({
  selector: 'app-project-image',
  template: `
    <picture>
      <source [srcset]="webpSrc" type="image/webp">
      <img [src]="project.fallbackImage"
           [alt]="project.imageAlt"
           [width]="dimensions.width"
           [height]="dimensions.height"
           [loading]="loading"
           decoding="async"
           [class]="imgClass">
    </picture>
  `,
  styles: [`
    :host { display: block; }
    img { width: 100%; height: 100%; object-fit: cover; display: block; }
  `]
})
export class ProjectImageComponent {
  @Input() project!: Project;
  @Input() variant: ProjectImageVariant = 'thumb';
  @Input() loading: 'lazy' | 'eager' = 'lazy';
  @Input() imgClass = '';

  get webpSrc(): string {
    return this.variant === 'cover' ? this.project.coverImage : this.project.thumbImage;
  }

  get dimensions() {
    return getProjectImageDimensions(this.variant);
  }
}
