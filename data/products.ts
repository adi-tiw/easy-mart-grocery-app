import { BASE_URL } from "./baseUrl";
import * as SecureStore from 'expo-secure-store';


export type ItemData = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string
  image_urls: string[];
  created_at: string;
  updated_at: string;
};
export const products: ItemData[] = [
  {
    id: 1,
    name: "Tropical Burst Salad",
    description: "A refreshing mix of mango, avocado, and greens",
    price: 120,
    category: "Salads",
    image_urls: ["https://example.com/images/tropical-burst.jpg"],
    created_at: "2025-04-10T10:00:00Z",
    updated_at: "2025-04-10T10:00:00Z"
  },
  {
    id: 2,
    name: "Chocolate Crunch Cereal",
    description: "A chocolatey cereal blend with flax seeds",
    price: 140,
    category: "Cereals",
    image_urls: ["https://example.com/images/choco-crunch.jpg"],
    created_at: "2025-04-10T10:00:00Z",
    updated_at: "2025-04-12T09:00:00Z"
  },
  {
    id: 3,
    name: "Green Power Salad",
    description: "Packed with kale, spinach, and pumpkin seeds",
    price: 110,
    category: "Salads",
    image_urls: ["https://example.com/images/green-power.jpg"],
    created_at: "2025-04-08T08:30:00Z",
    updated_at: "2025-04-11T11:45:00Z"
  },
  {
    id: 4,
    name: "Oatmeal Raisin Delight",
    description: "Hearty oats with cinnamon and raisins",
    price: 100,
    category: "Cereals",
    image_urls: ["https://example.com/images/oatmeal-raisin.jpg"],
    created_at: "2025-04-07T07:20:00Z",
    updated_at: "2025-04-10T07:20:00Z"
  },
  {
    id: 5,
    name: "Vanilla Almond Milk",
    description: "Smooth almond milk with a hint of vanilla",
    price: 95,
    category: "Milks",
    image_urls: ["https://example.com/images/vanilla-almond.jpg"],
    created_at: "2025-04-05T06:00:00Z",
    updated_at: "2025-04-13T10:30:00Z"
  },
  {
    id: 6,
    name: "Berry Fusion Muesli",
    description: "A fruity mix of dried berries and grains",
    price: 130,
    category: "Cereals",
    image_urls: ["https://example.com/images/berry-fusion.jpg"],
    created_at: "2025-04-01T12:00:00Z",
    updated_at: "2025-04-14T15:00:00Z"
  },
  {
    id: 7,
    name: "Coconut Quinoa Bowl",
    description: "A tropical mix of quinoa, coconut flakes, and pineapple",
    price: 125,
    category: "Salads",
    image_urls: ["https://example.com/images/coconut-quinoa.jpg"],
    created_at: "2025-03-28T14:15:00Z",
    updated_at: "2025-04-02T09:30:00Z"
  },
  {
    id: 8,
    name: "Hazelnut Soy Milk",
    description: "Creamy soy milk blended with roasted hazelnuts",
    price: 105,
    category: "Milks",
    image_urls: ["https://example.com/images/hazelnut-soy.jpg"],
    created_at: "2025-03-25T09:00:00Z",
    updated_at: "2025-04-13T12:45:00Z"
  },
  {
    id: 9,
    name: "Energy Nut Mix",
    description: "Cereal infused with seeds, almonds, and honey",
    price: 135,
    category: "Cereals",
    image_urls: ["https://example.com/images/energy-nut.jpg"],
    created_at: "2025-03-22T13:45:00Z",
    updated_at: "2025-04-10T08:00:00Z"
  },
  {
    id: 10,
    name: "Strawberry Oat Smoothie Milk",
    description: "Oat milk with natural strawberry flavor",
    price: 90,
    category: "Milks",
    image_urls: ["https://example.com/images/strawberry-oat.jpg"],
    created_at: "2025-03-20T11:10:00Z",
    updated_at: "2025-04-11T13:00:00Z"
  }
];


export type category = {
  id: number;
  category: string;
}

export const category : category[] = [
  {id: 0 , category: 'All'},
  {id: 1 , category: 'Salads'},
  {id: 2 , category: 'Milks'},
  {id: 3 , category: 'Cereals'},
  {id: 4 , category: 'Salads'},
  {id: 5 , category: 'Milks'},
  {id: 6 , category: 'Cereals'},
]

