import images from './images';

const traditional = [
  {
    title: 'Clássico',
    price: 'R$ 6,50',
    tags: 'Arábica | 240 ml'
  },
  {
    title: 'Americano',
    price: 'R$ 5,50',
    tags: 'Conilon | 240 ml'
  },
  {
    title: 'Café com leite',
    price: 'R$ 7,00',
    tags: 'Tradicional | 240 ml'
  },
  {
    title: 'Puro',
    price: 'R$ 6,00',
    tags: 'Forte | 240 ml'
  },
  {
    title: 'Coado',
    price: 'R$ 5,00',
    tags: 'Brasileiro | 240 ml'
  }
];

const especial = [
  {
    title: 'Espresso',
    price: 'R$ 10',
    tags: 'Café Arábica | 30ml'
  },
  {
    title: 'Cappuccino',
    price: 'R$ 18',
    tags: 'Espresso | Leite vaporizado | Espuma de leite. '
  },
  {
    title: 'Macchiato',
    price: 'R$ 15',
    tags: 'Espresso | Toque de espuma de leite.'
  },
  {
    title: 'Duplo',
    price: 'R$ 16',
    tags: 'Dupla dose de Espresso | 60ml.'
  },
  {
    title: 'Latte',
    price: 'R$ 20',
    tags: 'Espresso | Leite vaporizado | Fina camada de espuma.'
  }
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Inovador Aromático',
    subtitle: 'Aromas ousados no café.'
  },
  {
    imgUrl: images.award01,
    title: 'Mestre do Espresso',
    subtitle: 'Maestria em extrair o espresso perfeito.'
  },
  {
    imgUrl: images.award05,
    title: 'Sabor do Ano',
    subtitle: 'Misturas conquistadoras e memoráveis.'
  },
  {
    imgUrl: images.award03,
    title: 'Arte Latte',
    subtitle: 'Celebração em cada xícara.'
  }
];

export default { traditional, especial, awards };
