# Altamirano Diseño

Sitio web de [Altamirano Diseño](https://altamiranodiseno.com): tienda y taller de muebles hechos a mano en Pucón, Chile.

La arquitectura del sitio toma como referencia [De La Espada](https://delaespada.com). Las imágenes, los textos del catálogo y las tipografías (EB Garamond y Barlow) vienen del sitio actual hecho en Canva.

## Desarrollo

Requiere Node 20.3 o superior.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # genera el sitio estático en dist/
npm run preview   # sirve dist/
npm run check     # revisión de tipos de Astro
```

## Estructura

| Ruta | Contenido |
| --- | --- |
| `src/data/catalog.ts` | Categorías, líneas, productos y colores de cuero |
| `src/data/stories.ts` | Historias (journal) |
| `src/data/site.ts` | Dirección, teléfonos, WhatsApp, correo e Instagram |
| `src/data/nav.ts` | Menú principal (megamenú) y enlaces del pie |
| `src/pages/` | Inicio, productos, ficha de producto, espacios, taller, historias, contacto, colores de cuero |
| `src/components/` | Header, buscador, carruseles, tarjetas, galería, etc. |
| `src/assets/img/` | Imágenes optimizadas (WebP) |

## Imágenes

`scripts/images.json` asocia cada imagen del sitio con su archivo original en el sitio de Canva. Para volver a descargarlas y optimizarlas:

```sh
npm run images            # solo las que faltan
npm run images -- --force # todas
```

Los productos con recorte (fondo transparente) se muestran sobre fondo neutro; las fotos de ambiente se recortan para llenar su espacio.

## Publicación

Cada push a `main` publica una vista previa en GitHub Pages: <https://papafrita.github.io/altamiranodiseno/> (`.github/workflows/pages.yml`).

El sitio usa `SITE_URL` y `BASE_PATH` para funcionar bajo `/altamiranodiseno/`; sin esas variables se compila para el dominio definitivo. Los enlaces internos deben pasar por `url()` de `src/lib/url.ts`.

## Pendiente de validar con el cliente

- Textos de historias, taller y descripciones (borrador basado en el catálogo 2026).
- Precios: el sitio funciona por cotización (WhatsApp y correo); no hay carrito ni pagos.
- Suscripción a novedades: hoy abre un correo; se puede conectar a un servicio de newsletter.
- Nombres de algunos modelos (por ejemplo LA4 aparece dos veces en el catálogo con 1,20 m y 1,50 m).
