import { Injectable, Inject, DOCUMENT } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import {
  absoluteAssetUrl,
  absoluteSiteUrl,
  OG_DEFAULT_HEIGHT,
  OG_DEFAULT_PATH,
  OG_DEFAULT_WIDTH,
  PROJECT_IMAGE_DIMENSIONS,
  SITE_NAME,
  SITE_URL
} from '../constants/site.constants';

export interface SeoConfig {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  type?: 'website' | 'article';
  noIndex?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly siteName = SITE_NAME;

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  getAbsoluteAssetUrl(assetPath: string): string {
    return absoluteAssetUrl(assetPath);
  }

  getDefaultOgImageUrl(): string {
    return absoluteAssetUrl(OG_DEFAULT_PATH);
  }

  update(config: SeoConfig): void {
    const fullTitle = config.title.includes(this.siteName)
      ? config.title
      : `${config.title} | ${this.siteName}`;

    const url = absoluteSiteUrl(config.path ?? '/');
    const imagePath = config.image ?? OG_DEFAULT_PATH;
    const image = imagePath.startsWith('http')
      ? imagePath
      : absoluteAssetUrl(imagePath);
    const imageWidth = config.imageWidth ?? OG_DEFAULT_WIDTH;
    const imageHeight = config.imageHeight ?? OG_DEFAULT_HEIGHT;
    const type = config.type ?? 'website';
    const robots = config.noIndex ? 'noindex, nofollow' : 'index, follow';

    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'robots', content: robots });

    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:image:width', content: String(imageWidth) });
    this.meta.updateTag({ property: 'og:image:height', content: String(imageHeight) });
    this.meta.updateTag({ property: 'og:type', content: type });
    this.meta.updateTag({ property: 'og:locale', content: 'es_AR' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
    this.meta.updateTag({ name: 'twitter:url', content: url });

    this.setCanonical(url);
  }

  setHomeDefaults(): void {
    this.update({
      title: `${SITE_NAME} | Full Stack & AI Agent Developer`,
      description:
        'Full Stack & AI Agent Developer. Aplicaciones empresariales con Angular, NestJS, Python y AWS: APIs, automatización, agentic workflows, análisis funcional e integraciones cloud en producción.',
      path: '/',
      image: OG_DEFAULT_PATH,
      imageWidth: OG_DEFAULT_WIDTH,
      imageHeight: OG_DEFAULT_HEIGHT
    });
  }

  updateForProject(title: string, description: string, slug: string, ogImagePath: string): void {
    this.update({
      title: `${title} — Caso de estudio`,
      description,
      path: `/proyecto/${slug}`,
      image: ogImagePath,
      imageWidth: PROJECT_IMAGE_DIMENSIONS.og.width,
      imageHeight: PROJECT_IMAGE_DIMENSIONS.og.height,
      type: 'article'
    });
  }

  updateForEducation(title: string, description: string, path: string): void {
    this.update({
      title,
      description,
      path,
      type: 'article'
    });
  }

  /** Dominio canónico de producción. */
  getSiteUrl(): string {
    return SITE_URL;
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
