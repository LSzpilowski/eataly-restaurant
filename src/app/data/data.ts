interface IMealData {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  isTopPick: boolean;
}

export const mealData: IMealData[] = [
  {
    id: 1,
    name: 'Bruschetta al Pomodoro',
    category: 'starters',
    image: '/bruschetta_al_pomodoro.png',
    price: '£5.00',
    isTopPick: true
  },
  {
    id: 2,
    name: 'Caprese Salad',
    category: 'starters',
    image: '/caprese_salad.png',
    price: '£6.50',
    isTopPick: false
  },
  {
    id: 3,
    name: 'Antipasto Platter',
    category: 'starters',
    image: '/antipasto_platter.png',
    price: '£8.00',
    isTopPick: false
  },
  {
    id: 4,
    name: 'Calamari Fritti',
    category: 'starters',
    image: '/calmari_fritti.png',
    price: '£7.50',
    isTopPick: true
  },
  {
    id: 5,
    name: 'Garlic Bread',
    category: 'starters',
    image: '/garlic_bread.png',
    price: '£4.00',
    isTopPick: true
  },
  {
    id: 6,
    name: 'Margherita Pizza',
    category: 'main courses',
    image: '/margherite_pizza.png',
    price: '£9.00',
    isTopPick: true
  },
  {
    id: 7,
    name: 'Spaghetti Carbonara',
    category: 'main courses',
    image: '/spaghetti_carbonara.png',
    price: '£10.50',
    isTopPick: true
  },
  {
    id: 8,
    name: 'Lasagna al Forno',
    category: 'main courses',
    image: '/lasagna_al_forno.png',
    price: '£11.00',
    isTopPick: true
  },
  {
    id: 9,
    name: 'Chicken Parmigiana',
    category: 'main courses',
    image: '/chicken_parmigiana.png',
    price: '£12.50',
    isTopPick: false
  },
  {
    id: 10,
    name: 'Risotto ai Funghi',
    category: 'main courses',
    image: '/risotto_ai_funghi.png',
    price: '£11.00',
    isTopPick: false
  },
  {
    id: 11,
    name: 'Tiramisu',
    category: 'desserts',
    image: '/tiramisu.png',
    price: '£6.00',
    isTopPick: true
  },
  {
    id: 12,
    name: 'Panna Cotta',
    category: 'desserts',
    image: '/panna_cotta.png',
    price: '£5.50',
    isTopPick: false
  },
  {
    id: 13,
    name: 'Cannoli',
    category: 'desserts',
    image: '/cannoli.png',
    price: '£5.00',
    isTopPick: true
  },
  {
    id: 14,
    name: 'Gelato',
    category: 'desserts',
    image: '/gelato.png',
    price: '£4.00',
    isTopPick: false
  },
  {
    id: 15,
    name: 'Affogato',
    category: 'desserts',
    image: '/affogato.png',
    price: '£5.50',
    isTopPick: true
  },
  {
    id: 16,
    name: 'Espresso',
    category: 'hot drinks',
    image: '/espresso.png',
    price: '£2.50',
    isTopPick: true
  },
  {
    id: 17,
    name: 'Cappuccino',
    category: 'hot drinks',
    image: '/cappuccino.png',
    price: '£3.00',
    isTopPick: false
  },
  {
    id: 18,
    name: 'Latte',
    category: 'hot drinks',
    image: '/latte.png',
    price: '£3.00',
    isTopPick: false
  },
  {
    id: 19,
    name: 'Americano',
    category: 'hot drinks',
    image: '/americano.png',
    price: '£2.50',
    isTopPick: false
  },
  {
    id: 20,
    name: 'Tea',
    category: 'hot drinks',
    image: '/tea.png',
    price: '£2.00',
    isTopPick: false
  },
  {
    id: 21,
    name: 'Italian Sodas',
    category: 'soft drinks',
    image: '/italian_sodas.png',
    price: '£3.50',
    isTopPick: false
  },
  {
    id: 22,
    name: 'Limonata',
    category: 'soft drinks',
    image: '/limonata.png',
    price: '£3.00',
    isTopPick: false
  },
  {
    id: 23,
    name: 'Aranciata',
    category: 'soft drinks',
    image: '/arnaciata.png',
    price: '£3.00',
    isTopPick: false
  },
  {
    id: 24,
    name: 'Mineral Water',
    category: 'soft drinks',
    image: '/mineral_water.png',
    price: '£2.00',
    isTopPick: false
  },
  {
    id: 25,
    name: 'Cola',
    category: 'soft drinks',
    image: '/cola.png',
    price: '£2.50',
    isTopPick: false
  }
];
