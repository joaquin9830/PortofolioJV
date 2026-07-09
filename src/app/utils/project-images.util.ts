import { PROJECT_IMAGE_DIMENSIONS } from '../constants/site.constants';

export interface ProjectImagePaths {
  coverImage: string;
  thumbImage: string;
  ogImage: string;
  fallbackImage: string;
  imageAlt: string;
}

export function buildProjectImagePaths(slug: string, title: string): ProjectImagePaths {
  const base = `assets/images/projects/${slug}`;
  return {
    coverImage: `${base}/cover.webp`,
    thumbImage: `${base}/thumb.webp`,
    ogImage: `${base}/og.webp`,
    fallbackImage: `${base}/fallback.svg`,
    imageAlt: `Captura del proyecto ${title}`
  };
}

export function getProjectImageDimensions(variant: 'cover' | 'thumb' | 'og') {
  return PROJECT_IMAGE_DIMENSIONS[variant];
}
