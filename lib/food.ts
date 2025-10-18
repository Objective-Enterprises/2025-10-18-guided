import { FoodItem } from "../types";

export const items: FoodItem[] = [
  {
    id: '1',
    name: 'Burger',
    description: 'Classic american sandwich',
    image: '/images/burger.jpg',
    price: 10,
    ingredients: ['Potato', 'Beef', 'Avocado']
  },
  {
    id: '2',
    name: 'Pasta',
    image: '/images/pasta.jpg',
    description: 'Noodles in sauce',
    price: 15,
    ingredients: ['Wheat', 'Cream', 'Tomatoes']
  },
  {
    id: '3',
    name: 'Pizza',
    image: '/images/pizza.jpg',
    price: 20,
    ingredients: ['Wheat', 'Tomatoes', 'Cheese', 'Basil'],
    description: 'Large italian pie'
  }
]