export const site = {
  name: 'Altamirano Diseño',
  description:
    'Muebles y cuerpos de luz hechos a mano en Pucón, Chile. Maderas nativas, cuero de origen nacional y acero, trabajados en nuestro taller.',
  address: {
    street: 'Clemente Holzapfel 71',
    city: 'Pucón',
    region: 'Región de La Araucanía',
    country: 'Chile',
  },
  phones: [
    { label: '+56 9 8880 0546', href: 'tel:+56988800546' },
    { label: '+56 45 244 3347', href: 'tel:+56452443347' },
  ],
  whatsapp: '56988800546',
  email: 'tiendafelipealtamirano@gmail.com',
  instagram: {
    handle: '@altamiranodiseno',
    url: 'https://www.instagram.com/altamiranodiseno/',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Clemente+Holzapfel+71,+Puc%C3%B3n,+Chile',
  mapsEmbed: 'https://www.google.com/maps?q=Clemente+Holzapfel+71,+Puc%C3%B3n,+Chile&output=embed',
};

export const whatsappLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const mailLink = (subject: string, body = '') =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
