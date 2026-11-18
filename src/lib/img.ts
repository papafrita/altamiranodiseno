import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/img/**/*.webp', {
  eager: true,
});

/** Resolves an image by its name in scripts/images.json, e.g. `img('ambientes/mesas')`. */
export function img(name: string): ImageMetadata {
  const file = files[`/src/assets/img/${name}.webp`];
  if (!file) throw new Error(`Imagen no encontrada: ${name}`);
  return file.default;
}
