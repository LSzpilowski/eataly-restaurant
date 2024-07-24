

interface ITopPicks {
  id: number;
  title: string;
  price: string;
  img: string;
}

interface IMealData {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
}

export const topPicks: ITopPicks[] = [
  {
    id: 1,
    title: 'Shwarma',
    price:'8,50$',
    img: '/img/shwarma.png'
  },
  {
    id: 2,
    title: 'Fruite Juice',
    price:'3,50$',
    img: '/img/fruite-juice.png'
  },
  {
    id: 3,
    title: 'Yogurt Parfait',
    price:'8,50$',
    img: '/img/yogurt-parfait.png'
  },
  {
    id: 4,
    title: 'Eggs with Plantain',
    price:'11$',
    img: '/img/egg-plantain.png'
  },
  {
    id: 5,
    title: 'Tilapia Fish',
    price:'16$',
    img: '/img/tilapia-fish.png'
  },
  {
    id: 6,
    title: 'Jollof Rice',
    price:'3$',
    img: '/img/jollof-rice.png'
  },
  {
    id: 7,
    title: 'Chicken Burger',
    price:'12$',
    img: '/img/chicken-burger.png'
  },
  {
    id: 8,
    title: 'African Salad',
    price:'9$',
    img: '/img/african-salad.png'
  },
  {
    id: 9,
    title: 'Chinese Pizza',
    price:'8,50$',
    img: '/img/chineses-pizza.png'
  },
  {
    id: 10,
    title: 'Pierogi',
    price:'200$',
    img: '/img/pierogi.png'
  }
]

export const mealData: IMealData[] = [ 
  {
    id:1,
    name: 'Margerita',
    category: 'pizza',
    image: '/img/pizza-margherita.png',
    price: '19,9$'
  },
  {
    id:2,
    name: 'Chinese',
    category: 'pizza',
    image: '/img/chineses-pizza.png',
    price: '19,9$'
  },
  {
    id:3,
    name: 'Hawaiian',
    category: 'pizza',
    image: '/img/pizza-hawaiian.png',
    price: '19,9$'
  },
  {
    id:4,
    name: 'Four Cheese',
    category: 'pizza',
    image: '/img/pizza-four-cheese.png',
    price: '19,9$'
  },
  {
    id:5,
    name: 'African Salad',
    category: 'salad',
    image: '/img/african-salad.png',
    price: '12,9$'
  },
  {
    id:6,
    name: 'Beef Salad',
    category: 'salad',
    image: '/img/beef-salad.png',
    price: '12,9$'
  },
{
    id:7,
    name: 'Mango Salad',
    category: 'salad',
    image: '/img/mango-salad.png',
    price: '12,9$'
  },
  {
    id:8,
    name: 'Pomelo & Prawn Salad',
    category: 'salad',
    image: '/img/pomelo-prawn-salad.png',
    price: '12,9$'
  },
  {
    id:9,
    name: 'Four cheese garlic bread',
    category: 'appetizer',
    image: '/img/four-cheese-garlic-bread.png',
    price: '9,99$'
  },
  {
    id:10,
    name: 'Baked Sweet Potato Fries',
    category: 'appetizer',
    image: '/img/baked-sweet-potato-fries.png',
    price: '9,99$'
  },
  {
    id:11,
    name: 'Fried calmari',
    category: 'appetizer',
    image: '/img/fried-calmari.png',
    price: '9,99$'
  },
  {
    id:12,
    name: 'Stuffed mushrooms',
    category: 'appetizer',
    image: '/img/stuffed-mushrooms.png',
    price: '9,99$'
  }
]