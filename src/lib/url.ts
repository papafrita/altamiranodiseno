const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Antepone la ruta base del sitio (p. ej. `/altamiranodiseno` en GitHub Pages) a las rutas internas. */
export function url(path: string): string {
  return path.startsWith('/') ? `${base}${path}` : path;
}
