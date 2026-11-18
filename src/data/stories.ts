export interface Story {
  slug: string;
  title: string;
  quote: string;
  cover: string;
  intro: string;
  body: string[];
  images: string[];
  related?: { label: string; href: string };
}

export const stories: Story[] = [
  {
    slug: 'maderas-nativas',
    title: 'Maderas locales y nativas',
    quote: 'Raulí, laurel, aromo, roble y más: maderas del sur de Chile trabajadas en nuestro taller.',
    cover: 'taller/manos',
    intro:
      'Cada mueble comienza con la elección de la madera. Trabajamos con especies locales y nativas, como raulí, laurel, aromo y roble, que seleccionamos por su veta, su color y su nobleza.',
    body: [
      'En el taller, la madera se corta, se ensambla y se termina a mano. Algunas piezas conservan una superficie lisa; otras reciben un texturado que acentúa la veta y le da carácter a cada mueble.',
      'Las terminaciones, desde el tono natural del raulí hasta la textura blanqueada ceniza o el gris, se eligen para que cada pieza dialogue con su espacio.',
    ],
    images: ['taller/madera', 'taller/manos'],
    related: { label: 'Ver mesas', href: '/productos/mesas' },
  },
  {
    slug: 'acero-y-madera',
    title: 'Diseños únicos en acero y madera',
    quote: 'El acero aporta sutileza y un toque contemporáneo a tu espacio.',
    cover: 'taller/acero-soldadura',
    intro:
      'Junto a la madera, el fierro y el acero forman parte de nuestro lenguaje. Bases de mesas, taburetes y sillas se forjan y sueldan en el taller.',
    body: [
      'El metal permite estructuras livianas y precisas que contrastan con la calidez de las maderas nativas. Algunas piezas se dejan en su color natural; otras reciben un efecto oxidado.',
      'El resultado son muebles sólidos y, a la vez, de líneas sutiles, pensados para durar.',
    ],
    images: ['taller/acero-forja', 'taller/acero-fuego'],
    related: { label: 'Ver taburetes', href: '/productos/taburetes' },
  },
  {
    slug: 'cuerpos-de-luz',
    title: 'Cuerpos de luz',
    quote: 'Cada obra toma forma a partir de un proceso artesanal meticuloso.',
    cover: 'taller/lamparas-artesano',
    intro:
      'Nuestras lámparas nacen en el taller como esculturas. Lunas, colgantes y columnas de luz se construyen a mano, una a una.',
    body: [
      'Estructuras de madera, ramas y fibras se combinan con pantallas translúcidas que filtran la luz y la vuelven cálida.',
      'El resultado es una escultura de luz única y original, resistente y sólida.',
    ],
    images: ['taller/lamparas-ramas', 'taller/lamparas-detalle'],
    related: { label: 'Ver lámparas', href: '/productos/lamparas' },
  },
  {
    slug: 'cuero-nacional',
    title: 'Cuero de origen nacional',
    quote: 'Asientos y respaldos en cuero chileno, disponibles en nueve colores.',
    cover: 'taller/cuero',
    intro:
      'Sillas, sitiales, taburetes y butacones llevan asientos y respaldos de cuero de origen nacional, cortado y costurado en el taller.',
    body: [
      'Ofrecemos el cuero en natural, negro brillante, negro opaco, azul metálico, azul marino, rojo, verde oliva, whisky y café moro.',
      'Consulta la disponibilidad de colores para tu pedido.',
    ],
    images: ['taller/cuero-detalle', 'taller/cuero'],
    related: { label: 'Ver colores de cuero', href: '/colores-de-cuero' },
  },
];
