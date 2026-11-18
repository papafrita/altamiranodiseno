// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL y BASE_PATH permiten publicar una vista previa en GitHub Pages
// (https://<usuario>.github.io/<repo>/) sin cambiar el dominio definitivo.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://altamiranodiseno.com',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
  image: {
    responsiveStyles: true,
  },
});
