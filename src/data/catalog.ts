// Product data transcribed from the Canva catalog ("Catálogo 2026") published at altamiranodiseno.com.
// Image names refer to scripts/images.json.

export interface Category {
  slug: string;
  name: string;
  /** Singular label used to build product names, e.g. "Taburete". */
  singular: string;
  intro: string;
  cover: string;
  gallery?: string[];
}

export interface Line {
  slug: string;
  name: string;
  category: string;
  intro: string;
  cover: string;
}

export interface Product {
  slug: string;
  code: string;
  name: string;
  category: string;
  line?: string;
  materials: string[];
  dimensions?: string;
  /** Main image. Cutouts (transparent background) are shown on a neutral tile. */
  image: string;
  cutout: boolean;
  gallery: string[];
  leather: boolean;
}

export const categories: Category[] = [
  {
    slug: 'sillas',
    name: 'Sillas',
    singular: 'Silla',
    intro:
      'Sillas de raulí, aromo y maderas nativas con asientos de cuero de origen nacional, en cuatro líneas: Altamirano, Origen, Lafkén y Pillán.',
    cover: 'ambientes/sillas',
  },
  {
    slug: 'sitiales',
    name: 'Sitiales',
    singular: 'Sitial',
    intro: 'Sitiales con brazos en aromo y raulí, tapizados en cuero y disponibles en distintos colores.',
    cover: 'ambientes/sitiales',
  },
  {
    slug: 'taburetes',
    name: 'Taburetes',
    singular: 'Taburete',
    intro: 'Taburetes de madera nativa, fierro y acero, en altura de mesa y de barra.',
    cover: 'ambientes/taburetes',
    gallery: ['ambientes/taburetes-detalle', 'ambientes/taburetes-2', 'ambientes/taburetes-3', 'ambientes/taburetes-4'],
  },
  {
    slug: 'butacones',
    name: 'Butacones',
    singular: 'Butacón',
    intro: 'Butacones de madera nativa con asiento y respaldo de cuero, pensados para durar.',
    cover: 'ambientes/butacones',
    gallery: ['ambientes/butacones-2', 'ambientes/butacones-detalle'],
  },
  {
    slug: 'mesas',
    name: 'Mesas',
    singular: 'Mesa',
    intro:
      'Mesas de comedor en maderas nativas. Diseños únicos en acero y madera: el acero aporta sutileza y un toque contemporáneo a tu espacio.',
    cover: 'ambientes/mesas',
    gallery: [
      'ambientes/mesa-acero-negra',
      'ambientes/mesa-vidrio',
      'ambientes/mesa-vidrio-cuadrada',
      'ambientes/mesa-cuadrada',
      'ambientes/mesa-vidrio-comedor',
    ],
  },
  {
    slug: 'mesas-de-centro',
    name: 'Mesas de centro',
    singular: 'Mesa de centro',
    intro: 'Mesas de centro de gran formato en raulí y maderas nativas.',
    cover: 'ambientes/mesas-centro',
    gallery: ['ambientes/mesa-centro-negra', 'ambientes/mesa-centro-negra-2', 'ambientes/mesa-centro-alfombra'],
  },
  {
    slug: 'arrimos',
    name: 'Arrimos',
    singular: 'Arrimo',
    intro: 'Arrimos y bifés de madera nativa, algunos con detalles en cuero.',
    cover: 'ambientes/arrimo',
    gallery: ['ambientes/arrimo-acero', 'ambientes/arrimo-espejo'],
  },
  {
    slug: 'sofas',
    name: 'Sofás',
    singular: 'Sofá',
    intro: 'Sofás en cuero, cuero y madera, y lino, fabricados a la medida de tu espacio.',
    cover: 'ambientes/living',
  },
  {
    slug: 'veladores',
    name: 'Veladores',
    singular: 'Velador',
    intro: 'Veladores y mesas laterales en raulí y maderas nativas.',
    cover: 'ambientes/velador-lampara',
    gallery: ['ambientes/velador', 'ambientes/mesa-lateral', 'ambientes/velador-lampara-2', 'ambientes/velador-lampara-3'],
  },
  {
    slug: 'lamparas',
    name: 'Lámparas',
    singular: 'Lámpara',
    intro:
      'Cuerpos de luz. Cada obra toma forma a partir de un proceso artesanal meticuloso; el resultado es una escultura de luz única y original, resistente y sólida.',
    cover: 'ambientes/lamparas',
    gallery: ['ambientes/lampara-luna', 'ambientes/lampara-luna-living', 'ambientes/lamparas-columnas', 'ambientes/lampara-techo'],
  },
  {
    slug: 'textiles',
    name: 'Textiles',
    singular: 'Textil',
    intro: 'Textiles, arte, cerámica y más: piezas que acompañan nuestros muebles y completan cada espacio.',
    cover: 'textiles/portada',
    gallery: [
      'textiles/cojines-1',
      'textiles/cojines-2',
      'textiles/cojines-3',
      'textiles/cojines-4',
      'textiles/mantas',
      'textiles/sofa',
      'textiles/arte-1',
      'textiles/arte-2',
    ],
  },
];

export const lines: Line[] = [
  {
    slug: 'silla-altamirano',
    name: 'Silla Altamirano',
    category: 'sillas',
    intro:
      'Nuestra silla insignia. Estructura de raulí, aromo o madera lisa, con asiento de cuero de origen nacional en distintos colores y terminaciones.',
    cover: 'ambientes/silla-altamirano',
  },
  {
    slug: 'silla-origen',
    name: 'Silla Origen',
    category: 'sillas',
    intro: 'Raulí liso o texturado y cuero negro, en una silla de líneas simples y gran presencia.',
    cover: 'ambientes/silla-origen',
  },
  {
    slug: 'silla-lafken',
    name: 'Silla Lafkén',
    category: 'sillas',
    intro: 'Madera texturada en tonos ceniza y gris, con asiento de madera o de cuero natural.',
    cover: 'ambientes/silla-lafken',
  },
  {
    slug: 'silla-pillan',
    name: 'Silla Pillán',
    category: 'sillas',
    intro: 'Fierro trabajado a mano, con terminación natural o efecto oxidado y cojín de cuero.',
    cover: 'productos/s12-foto',
  },
  {
    slug: 'sitial-altamirano',
    name: 'Sitial Altamirano',
    category: 'sitiales',
    intro: 'La versión con brazos de nuestra silla insignia, en aromo o raulí y cuero en cuatro colores.',
    cover: 'ambientes/sitiales',
  },
];

type Raw = Omit<Product, 'slug' | 'name' | 'image' | 'cutout' | 'gallery' | 'leather'> & {
  name?: string;
  image?: string;
  cutout?: boolean;
  gallery?: string[];
  leather?: boolean;
};

const raw: Raw[] = [
  // Sillas
  { code: 'S2', category: 'sillas', line: 'silla-altamirano', materials: ['Raulí texturado', 'Cuero negro'] },
  { code: 'S3', category: 'sillas', line: 'silla-altamirano', materials: ['Madera lisa', 'Cuero negro'] },
  { code: 'S4', category: 'sillas', line: 'silla-altamirano', materials: ['Aromo texturado', 'Cuero azul'] },
  { code: 'S5', category: 'sillas', line: 'silla-altamirano', materials: ['Raulí', 'Cuero natural'] },
  { code: 'S6', category: 'sillas', line: 'silla-altamirano', materials: ['Raulí texturado', 'Cuero whisky'] },
  { code: 'S7', category: 'sillas', line: 'silla-altamirano', materials: ['Textura blanqueada ceniza', 'Cuero café'] },
  { code: 'S8', category: 'sillas', line: 'silla-origen', materials: ['Raulí', 'Cuero negro'] },
  { code: 'S9', category: 'sillas', line: 'silla-origen', materials: ['Raulí texturado', 'Cuero negro'] },
  { code: 'S10', category: 'sillas', line: 'silla-lafken', materials: ['Madera texturada ceniza oscuro', 'Cuero natural'], gallery: ['productos/s10-foto'] },
  { code: 'S11', category: 'sillas', line: 'silla-lafken', materials: ['Madera texturada color gris'], gallery: ['productos/s11-foto'], leather: false },
  { code: 'S12', category: 'sillas', line: 'silla-pillan', materials: ['Fierro', 'Cojín de cuero natural'], gallery: ['productos/s12-foto'] },
  { code: 'S13', category: 'sillas', line: 'silla-pillan', materials: ['Fierro efecto oxidado'], gallery: ['productos/s13-foto'], leather: false },
  // Sitiales
  { code: 'ST1', category: 'sitiales', line: 'sitial-altamirano', materials: ['Aromo', 'Cuero verde oliva'] },
  { code: 'ST2', category: 'sitiales', line: 'sitial-altamirano', materials: ['Raulí', 'Cuero café'] },
  { code: 'ST3', category: 'sitiales', line: 'sitial-altamirano', materials: ['Aromo', 'Cuero azul metálico'] },
  { code: 'ST4', category: 'sitiales', line: 'sitial-altamirano', materials: ['Raulí texturado', 'Cuero negro opaco'] },
  // Taburetes
  { code: 'TA1', category: 'taburetes', materials: ['Raulí', 'Cuero natural'] },
  { code: 'TA2', name: 'Taburete bar TA2', category: 'taburetes', materials: ['Madera texturada gris'], leather: false },
  { code: 'TA3', category: 'taburetes', materials: ['Aromo liso', 'Cuero natural'] },
  { code: 'TA4', category: 'taburetes', materials: ['Madera texturada gris', 'Cuero café moro'] },
  { code: 'TA5', category: 'taburetes', materials: ['Aromo liso', 'Cuero negro'], gallery: ['productos/ta5-b'] },
  { code: 'TA6', category: 'taburetes', materials: ['Raulí', 'Fierro efecto oxidado'], leather: false },
  { code: 'TA7', category: 'taburetes', materials: ['Raulí', 'Fierro efecto oxidado'], leather: false },
  { code: 'TA8', name: 'Taburete bar TA8', category: 'taburetes', materials: ['Fierro', 'Cojín de cuero a pedido'], gallery: ['productos/ta8-foto'] },
  { code: 'TA9', category: 'taburetes', materials: ['Acero', 'Cuero natural'], gallery: ['productos/ta9-foto'] },
  // Butacones
  { code: 'B2', category: 'butacones', materials: ['Raulí', 'Cuero rojo'] },
  { code: 'B3', category: 'butacones', materials: ['Raulí', 'Cuero negro'] },
  { code: 'B4', category: 'butacones', materials: ['Aromo', 'Cuero azul marino'] },
  { code: 'B5', category: 'butacones', materials: ['Raulí', 'Cuero natural'] },
  // Mesas
  { code: 'M2', category: 'mesas', materials: ['Maderas nativas'], dimensions: '2 × 1,10 m', gallery: ['productos/m2-foto'] },
  { code: 'M3', category: 'mesas', materials: ['Madera nativa', 'Ceniza y negro'], dimensions: '2 × 1,10 m', gallery: ['productos/m3-foto'] },
  { code: 'M4', category: 'mesas', materials: ['Madera nativa', 'Texturada gris'], dimensions: '2 × 1,10 m', gallery: ['productos/m4-foto'] },
  { code: 'M5', category: 'mesas', materials: ['Aromo', 'Ceniza'], dimensions: '1,50 × 1,50 m', gallery: ['productos/m5-foto'] },
  { code: 'M7', category: 'mesas', materials: ['Madera nativa'], dimensions: '2,10 × 1,10 m' },
  { code: 'M9', category: 'mesas', materials: ['Madera nativa'], dimensions: '1,20 × 0,70 m' },
  { code: 'M12', category: 'mesas', materials: ['Madera nativa', 'Base de acero'], dimensions: '2,20 × 1 m', gallery: ['productos/m12-foto'] },
  { code: 'M13', category: 'mesas', materials: ['Madera nativa', 'Base de acero'], dimensions: '2,10 × 1 m' },
  {
    code: 'M14',
    category: 'mesas',
    materials: ['Laurel', 'Base de acero'],
    dimensions: '1,20 × 1,20 m',
    image: 'productos/m14-foto',
    cutout: false,
    gallery: ['productos/m14-b-foto'],
  },
  { code: 'M15', name: 'Base para vidrio M15', category: 'mesas', materials: ['Aromo', 'Base para cubierta de vidrio'], dimensions: '0,60 × 1,10 m' },
  { code: 'M16', name: 'Base para vidrio M16', category: 'mesas', materials: ['Laurel', 'Base para cubierta de vidrio'], dimensions: '0,70 × 0,70 m' },
  // Mesas de centro
  { code: 'MC1', category: 'mesas-de-centro', materials: ['Raulí'], dimensions: '0,80 × 1,20 × 0,45 m', gallery: ['productos/mc1-b'] },
  {
    code: 'MC4',
    category: 'mesas-de-centro',
    materials: ['Maderas nativas'],
    dimensions: '0,70 × 1,20 × 0,45 m',
    image: 'productos/mc4-foto',
    cutout: false,
    gallery: ['productos/mc4-b-foto', 'productos/mc4-c-foto'],
  },
  // Arrimos
  { code: 'A2', category: 'arrimos', materials: ['Madera nativa'], dimensions: '1,60 × 0,80 × 0,35 m' },
  { code: 'A3', category: 'arrimos', materials: ['Madera nativa'], dimensions: '1,20 × 0,80 × 0,45 m' },
  { code: 'A4', category: 'arrimos', materials: ['Madera nativa', 'Cuero'] },
  { code: 'A5', category: 'arrimos', materials: ['Madera nativa'], dimensions: '1,40 × 0,80 × 0,35 m' },
  // Sofás
  { code: 'SO1', category: 'sofas', materials: ['Cuero gris'], dimensions: '2,80 × 1 × 0,60 m' },
  { code: 'SO2', category: 'sofas', materials: ['Cuero', 'Madera'], dimensions: '1,80 × 1 × 0,60 m' },
  { code: 'SO3', category: 'sofas', materials: ['Lino'], dimensions: '2 × 1 × 0,60 m', leather: false },
  { code: 'SO4', category: 'sofas', materials: ['Lino'], dimensions: '2,40 × 1 × 0,60 m', leather: false },
  // Veladores
  { code: 'VE1', category: 'veladores', materials: ['Madera nativa'], dimensions: '60 × 45 × 60 cm' },
  { code: 'VE2', category: 'veladores', materials: ['Madera nativa'], dimensions: '40 × 40 × 60 cm' },
  { code: 'VE3', category: 'veladores', materials: ['Raulí'], dimensions: '40 × 40 × 73 cm' },
  { code: 'VE4', category: 'veladores', materials: ['Raulí'], dimensions: '40 × 40 × 85 cm' },
  // Lámparas
  { code: 'LA', name: 'Luna mediana', category: 'lamparas', materials: ['Colgante'], dimensions: 'Diámetro 90 cm', image: 'productos/la-foto', cutout: false },
  { code: 'LA2', category: 'lamparas', materials: ['Colgante'], dimensions: 'Diámetro 1 m aprox.', image: 'productos/la2-foto', cutout: false },
  {
    code: 'LA4',
    category: 'lamparas',
    materials: ['Esfera de luz'],
    dimensions: '1,20 m y 1,50 m',
    image: 'productos/la4-foto',
    cutout: false,
    gallery: ['productos/la4-b-foto'],
  },
  { code: 'Andrómeda', name: 'Andrómeda', category: 'lamparas', materials: ['Diseño especial', 'Colgante'], image: 'productos/andromeda-foto', cutout: false },
  { code: 'LA5', name: 'Luna LA5', category: 'lamparas', materials: ['Colgante'], dimensions: '1 m', image: 'productos/la5-foto', cutout: false },
  { code: 'LA6', category: 'lamparas', materials: ['Horizontal', 'Ramas'], dimensions: '1,60 m', image: 'productos/la6-foto', cutout: false },
  { code: 'LA7', category: 'lamparas', materials: ['De pie'], dimensions: '1,55 m de alto', image: 'productos/la7-foto', cutout: false },
  { code: 'LA8', category: 'lamparas', materials: ['De pie'], dimensions: '2,10 m de alto', image: 'productos/la8-foto', cutout: false },
  { code: 'LA9', category: 'lamparas', materials: ['De pie'], dimensions: '1 m de alto', image: 'productos/la9-foto', cutout: false },
  { code: 'LA10', category: 'lamparas', materials: ['De pie', 'Ramas'], dimensions: '2,20 m de alto', image: 'productos/la10-foto', cutout: false },
];

const slugify = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const products: Product[] = raw.map((p) => {
  const category = categories.find((c) => c.slug === p.category)!;
  const line = lines.find((l) => l.slug === p.line);
  const name = p.name ?? `${line ? line.name : category.singular} ${p.code}`;
  const base = slugify(p.code);
  return {
    ...p,
    slug: slugify(line ? `${line.name}-${p.code}` : name),
    name,
    image: p.image ?? `productos/${base}`,
    cutout: p.cutout ?? true,
    gallery: p.gallery ?? [],
    leather: p.leather ?? p.materials.some((m) => /cuero/i.test(m)),
  };
});

export const productsIn = (category: string) => products.filter((p) => p.category === category);
export const productsInLine = (line: string) => products.filter((p) => p.line === line);
export const categoryOf = (p: Product) => categories.find((c) => c.slug === p.category)!;
export const lineOf = (p: Product) => lines.find((l) => l.slug === p.line);

export const leatherColors = [
  { name: 'Natural', image: 'cueros/natural' },
  { name: 'Negro brillante', image: 'cueros/negro-brillante' },
  { name: 'Negro opaco', image: 'cueros/negro-opaco' },
  { name: 'Azul metálico', image: 'cueros/azul-metalico' },
  { name: 'Azul marino', image: 'cueros/azul-marino' },
  { name: 'Rojo', image: 'cueros/rojo' },
  { name: 'Verde oliva', image: 'cueros/verde-oliva' },
  { name: 'Whisky', image: 'cueros/whisky' },
  { name: 'Café moro', image: 'cueros/cafe-moro' },
];
