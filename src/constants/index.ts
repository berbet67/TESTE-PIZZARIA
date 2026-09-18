export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const BRAND_INFO = {
  name: 'Maday Pizza Bar',
  location: 'Campo Mourão - PR',
  ctaText: 'Peça via WhatsApp',
  ctaLink: 'https://wa.me/554438109000',
  logo: '/images.jpg',
};

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'Calabresa Premium',
    description: 'Calabresa artesanal, mussarela, cebola roxa e azeitonas pretas.',
    price: 55.00,
    category: 'Clássicas',
    image: '/pizzas/calabresa.jpg',
  },
  {
    id: 'p2',
    title: 'Marguerita Especial',
    description: 'Mussarela, manjericão fresco, tomate cereja e azeite extra virgem.',
    price: 50.00,
    category: 'Vegetariana',
    image: '/pizzas/marguerita.jpg',
  },
  {
    id: 'p3',
    title: 'Quatro Queijos Luxo',
    description: 'Gorgonzola, parmesão, provolone e mussarela fundidas.',
    price: 62.00,
    category: 'Especiais',
    image: '/pizzas/4queijos.jpg',
  },
  {
    id: 'p4',
    title: 'Frango com Catupiry',
    description: 'Frango desfiado temperado com Catupiry original e orégano.',
    price: 58.00,
    category: 'Clássicas',
    image: '/pizzas/frango.jpg',
  },
];

export const FAQ = [
  {
    question: 'Qual o horário de funcionamento?',
    answer: 'Funcionamos de terça a domingo, das 18h às 23h.',
  },
  {
    question: 'Vocês entregam em toda a cidade?',
    answer: 'Sim, entregamos em todos os bairros de Campo Mourão.',
  },
  {
    question: 'Qual o tempo médio de entrega?',
    answer: 'Nosso tempo médio é de 40 a 60 minutos, dependendo da demanda.',
  },
];
