/**
 * Genera WebP optimizados desde capturas reales (PNG/JPG) o fallback.svg.
 * Uso: npm run generate:assets
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('src/assets/images');
const PROJECTS_ROOT = path.join(ROOT, 'projects');
const OG_ROOT = path.join(ROOT, 'og');

const PROJECT_SLUGS = [
  'app-spa-gestion-tramites',
  'app-fullstack-operaciones-internas',
  'plataforma-gestion-operativa',
  'unnora',
  'carta-digital-gastronomia',
  'sitio-servicios-locales',
  'automatizaciones-cloud'
];

const SIZES = {
  cover: { width: 1600, height: 900, file: 'cover.webp' },
  thumb: { width: 800, height: 450, file: 'thumb.webp' },
  og: { width: 1200, height: 630, file: 'og.webp' }
};

const RASTER_PATTERN = /\.(png|jpe?g|webp)$/i;
const GENERATED_FILES = new Set(['cover.webp', 'thumb.webp', 'og.webp']);

const LEGACY_SOURCE_DIRS = {
  unnora: 'sitio-institucional-b2b'
};

/** Imagen fuente explícita por slug (nombre de archivo dentro de la carpeta del proyecto). */
const PROJECT_SOURCE_OVERRIDES = {
  'plataforma-gestion-operativa': '3.png'
};

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

function extractImageOrder(name) {
  const n = name.toLowerCase();
  if (n.includes('cover') || n === 'source.png') {
    return { priority: 0, num: 0 };
  }
  const foto = n.match(/^foto\s*(\d+)/);
  if (foto) {
    return { priority: 1, num: parseInt(foto[1], 10) };
  }
  const imagen = n.match(/^imagen\s*(\d+)/);
  if (imagen) {
    return { priority: 2, num: parseInt(imagen[1], 10) };
  }
  const numbered = n.match(/^(\d+)\.png$/);
  if (numbered) {
    return { priority: 3, num: parseInt(numbered[1], 10) };
  }
  return { priority: 9, num: 0 };
}

function pickBestRaster(dir) {
  if (!fs.existsSync(dir)) return null;

  const candidates = fs
    .readdirSync(dir)
    .filter((file) => RASTER_PATTERN.test(file) && !GENERATED_FILES.has(file))
    .map((file) => {
      const fullPath = path.join(dir, file);
      return { file, fullPath, size: fs.statSync(fullPath).size };
    });

  if (!candidates.length) return null;

  candidates.sort((a, b) => {
    const oa = extractImageOrder(a.file);
    const ob = extractImageOrder(b.file);
    if (oa.priority !== ob.priority) return oa.priority - ob.priority;
    if (oa.num !== ob.num) return oa.num - ob.num;
    return b.size - a.size;
  });

  return candidates[0].fullPath;
}

function resolveSourcePath(slug, index) {
  const projectDir = path.join(PROJECTS_ROOT, slug);
  const overrideFile = PROJECT_SOURCE_OVERRIDES[slug];
  if (overrideFile) {
    const overridePath = path.join(projectDir, overrideFile);
    if (fs.existsSync(overridePath)) {
      return overridePath;
    }
    console.warn(`⚠ Override no encontrado: ${overridePath}`);
  }

  const fromProjectDir = pickBestRaster(projectDir);
  if (fromProjectDir) {
    return fromProjectDir;
  }

  const legacyDirName = LEGACY_SOURCE_DIRS[slug];
  if (legacyDirName) {
    const legacyDir = path.join(PROJECTS_ROOT, legacyDirName);
    const fromLegacy = pickBestRaster(legacyDir);
    if (fromLegacy) {
      return fromLegacy;
    }
  }

  const svgPath = path.join(projectDir, 'fallback.svg');
  if (fs.existsSync(svgPath)) {
    return svgPath;
  }

  const legacySvg = legacyDirName
    ? path.join(PROJECTS_ROOT, legacyDirName, 'fallback.svg')
    : null;
  if (legacySvg && fs.existsSync(legacySvg)) {
    return legacySvg;
  }

  return null;
}

async function generateProjectAssets() {
  for (let index = 0; index < PROJECT_SLUGS.length; index++) {
    const slug = PROJECT_SLUGS[index];
    const outDir = path.join(PROJECTS_ROOT, slug);
    const sourcePath = resolveSourcePath(slug, index);

    if (!sourcePath) {
      console.warn(`⚠ Sin fuente de imagen para: ${slug}`);
      continue;
    }

    await ensureDir(outDir);

    const pipeline = sourcePath.endsWith('.svg')
      ? sharp(sourcePath)
      : sharp(sourcePath).rotate();

    for (const size of Object.values(SIZES)) {
      const outPath = path.join(outDir, size.file);
      await pipeline
        .clone()
        .resize(size.width, size.height, { fit: 'cover', position: 'centre' })
        .webp({ quality: 82 })
        .toFile(outPath);
      console.log(`✓ ${outPath} ← ${path.basename(sourcePath)}`);
    }
  }
}

async function generateOgDefault() {
  await ensureDir(OG_ROOT);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
      <rect width="1200" height="630" fill="#0f172a"/>
      <rect x="80" y="80" width="1040" height="470" rx="16" fill="#1e293b" stroke="#0ea5e9" stroke-width="2"/>
      <text x="600" y="260" text-anchor="middle" fill="#38bdf8" font-family="system-ui,sans-serif" font-size="42" font-weight="700">Joaquín Viñolo</text>
      <text x="600" y="320" text-anchor="middle" fill="#e2e8f0" font-family="system-ui,sans-serif" font-size="24">Desarrollador Angular / Full Stack</text>
      <text x="600" y="380" text-anchor="middle" fill="#94a3b8" font-family="system-ui,sans-serif" font-size="18">Aplicaciones SPA - Cloud - Integraciones - Automatizaciones</text>
    </svg>
  `;

  const jpgPath = path.join(OG_ROOT, 'og-default.jpg');
  await sharp(Buffer.from(svg))
    .resize(1200, 630)
    .jpeg({ quality: 85 })
    .toFile(jpgPath);

  console.log(`✓ ${jpgPath}`);
}

await generateProjectAssets();
await generateOgDefault();
console.log('Assets generados correctamente.');
