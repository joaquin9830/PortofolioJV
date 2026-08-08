import { Component, Input } from '@angular/core';
import { Project } from '../../model/project.model';
import { getProjectImageDimensions } from '../../utils/project-images.util';

export type ProjectImageVariant = 'thumb' | 'cover';
export type ProjectImageFit = 'cover' | 'contain';

@Component({
    selector: 'app-project-image',
    template: `
    <picture class="project-picture" [class.project-picture--contain]="fit === 'contain'">
      <source [srcset]="webpSrc" type="image/webp">
      <img [src]="webpSrc"
           [alt]="project.imageAlt"
           [width]="dimensions.width"
           [height]="dimensions.height"
           [loading]="loading"
           decoding="async"
           [class]="imgClass"
           [style.object-fit]="fit">
    </picture>
  `,
    styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }

    .project-picture,
    img {
      width: 100%;
      height: 100%;
      display: block;
    }

    .project-picture--contain img {
      object-position: center center;
    }
  `],
    standalone: false
})
export class ProjectImageComponent {
  @Input() project!: Project;
  @Input() variant: ProjectImageVariant = 'thumb';
  @Input() fit: ProjectImageFit = 'contain';
  @Input() loading: 'lazy' | 'eager' = 'lazy';
  @Input() imgClass = '';

  get webpSrc(): string {
    return this.variant === 'cover' ? this.project.coverImage : this.project.thumbImage;
  }

  get dimensions() {
    return getProjectImageDimensions(this.variant);
  }
}
