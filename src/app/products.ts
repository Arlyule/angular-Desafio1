export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images:string[];
  
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    images: ['imagen1.png']

    
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    images: ['imagen2.png']
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'Es un iphone Standar',
    images: ['imagen3.png']
  },
  {
    id: 4,
    name: 'Phone de la Pera',
    price: 1000,
    description: 'Es el aifon de la perita no puede ser',
    images: ['imagen4.png']
  },
  {
    id: 5,
    name: 'Phone de la Manzanita',
    price: 409,
    description: 'pos el de la manzana maistro',
    images: ['imagen5.png']
  },
  {
    id: 6,
    name: 'Phone 14 Pro Max',
    price: 30000,
    description: 'Es un iphonede los mas caros en el mercado',
    images: ['imagen6.png']
  }
];

