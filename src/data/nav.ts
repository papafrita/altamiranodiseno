import { categories } from './catalog';
import { stories } from './stories';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href: string;
  columns: { title: string; links: NavLink[] }[];
  featured: (NavLink & { image: string })[];
}

const half = Math.ceil(categories.length / 2);
const byType = categories.map((c) => ({ label: c.name, href: `/productos/${c.slug}` }));

export const nav: NavGroup[] = [
  {
    label: 'Productos',
    href: '/productos',
    columns: [
      {
        title: 'Productos',
        links: [
          { label: 'Ver todos los productos', href: '/productos' },
          { label: 'Colores de cuero', href: '/colores-de-cuero' },
          { label: 'Hecho a medida', href: '/contacto#asesoria' },
        ],
      },
      { title: 'Por tipo', links: byType.slice(0, half) },
      { title: '\u00a0', links: byType.slice(half) },
    ],
    featured: [
      { label: 'Silla Altamirano', href: '/productos/sillas#silla-altamirano', image: 'ambientes/silla-altamirano' },
      { label: 'Cuerpos de luz', href: '/productos/lamparas', image: 'ambientes/lampara-luna' },
    ],
  },
  {
    label: 'Espacios',
    href: '/espacios',
    columns: [
      {
        title: 'Espacios',
        links: [
          { label: 'Ver todos los espacios', href: '/espacios' },
          { label: 'Comedores', href: '/espacios#comedores' },
          { label: 'Livings', href: '/espacios#livings' },
          { label: 'Iluminación', href: '/espacios#iluminacion' },
        ],
      },
    ],
    featured: [
      { label: 'Comedores', href: '/espacios#comedores', image: 'ambientes/comedor' },
      { label: 'Livings', href: '/espacios#livings', image: 'ambientes/living' },
    ],
  },
  {
    label: 'Taller',
    href: '/taller',
    columns: [
      {
        title: 'Taller',
        links: [
          { label: 'Nosotros', href: '/taller' },
          { label: 'Maderas nativas', href: '/taller#maderas' },
          { label: 'Cuero nacional', href: '/taller#cuero' },
          { label: 'Acero y madera', href: '/taller#acero' },
          { label: 'Cuerpos de luz', href: '/taller#luz' },
        ],
      },
    ],
    featured: [
      { label: 'El taller', href: '/taller', image: 'taller/manos' },
      { label: 'Acero y madera', href: '/taller#acero', image: 'taller/acero-soldadura' },
    ],
  },
  {
    label: 'Historias',
    href: '/historias',
    columns: [
      {
        title: 'Historias',
        links: [
          { label: 'Ver todas', href: '/historias' },
          ...stories.map((s) => ({ label: s.title, href: `/historias/${s.slug}` })),
        ],
      },
    ],
    featured: stories.slice(0, 2).map((s) => ({ label: s.title, href: `/historias/${s.slug}`, image: s.cover })),
  },
  {
    label: 'Contacto',
    href: '/contacto',
    columns: [
      {
        title: 'Contacto',
        links: [
          { label: 'Escríbenos', href: '/contacto' },
          { label: 'Asesoría de espacios', href: '/contacto#asesoria' },
          { label: 'Visita la tienda', href: '/contacto#tienda' },
        ],
      },
    ],
    featured: [
      { label: 'Asesoría de espacios', href: '/contacto#asesoria', image: 'ambientes/arrimo-espejo' },
      { label: 'Visita la tienda', href: '/contacto#tienda', image: 'ambientes/contacto' },
    ],
  },
];

export const footerLinks: NavLink[] = [
  { label: 'Productos', href: '/productos' },
  { label: 'Espacios', href: '/espacios' },
  { label: 'Taller', href: '/taller' },
  { label: 'Historias', href: '/historias' },
  { label: 'Colores de cuero', href: '/colores-de-cuero' },
  { label: 'Contacto', href: '/contacto' },
];
