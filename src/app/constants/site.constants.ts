/** Dominio canónico de producción (sin trailing slash). */
export const SITE_URL = 'https://joaquinvinolo.com';

/** Alias histórico — preferir SITE_URL en código nuevo. */
export const SITE_BASE_URL = SITE_URL;

export const SITE_NAME = 'Joaquín Viñolo';

export const CV_PATH = 'assets/document/CV_Joaquin_Vinolo_Full_Stack_Developer.pdf';

export const OG_DEFAULT_PATH = 'assets/images/og/og-default.jpg';

export const OG_DEFAULT_WIDTH = 1200;
export const OG_DEFAULT_HEIGHT = 630;

export const CONFIDENTIALITY_NOTICE =
  'Proyecto privado. Las representaciones visuales no muestran pantallas reales, datos reales, diseño productivo ni información interna de la organización.';

export const PROJECT_IMAGE_DIMENSIONS = {
  cover: { width: 1600, height: 900 },
  thumb: { width: 800, height: 450 },
  og: { width: 1200, height: 630 }
} as const;

/** Construye una URL absoluta del sitio a partir de un path relativo. */
export function absoluteSiteUrl(path = '/'): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized === '/' ? '/' : normalized}`;
}

/** Construye una URL absoluta de asset (OG, imágenes, etc.). */
export function absoluteAssetUrl(assetPath: string): string {
  return `${SITE_URL}/${assetPath.replace(/^\//, '')}`;
}
