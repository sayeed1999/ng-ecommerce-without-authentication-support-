import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  private allCategories: string[] = ['Bread', 'Dairy', 'Fruits', 'Seasonings & Spices', 'Vegetables']; //array of string
  
  categoryEmitted = new Subject<string>(); //used for communicating from categories to products

  private allProducts: IProduct[] = PRODUCTS;

  constructor() {}

  get getAllCategories() {
    return this.allCategories.slice(); //a copy of allCategories, not the original one!
  }

  get getAllProducts(): IProduct[] {
    return this.allProducts.slice();
  }
}

const PRODUCTS: IProduct[] = [
  {
    name: 'Bruschetta',
    price: 2.50,
    category: 'Bread',
    imageUrl: 'https://sweetandsavorymeals.com/wp-content/uploads/2020/05/tomato-bruschetta-facebook.jpg',
  },
  {
    name: 'Baguette',
    price: 2,
    category: 'Bread',
    imageUrl: 'https://i1.wp.com/images.wisegeek.com/f7b8adfcfebc469261b3611274e6bd1c.jpg',
  },
  {
    name: 'SourDough',
    price: 1.25,
    category: 'Bread',
    imageUrl: 'https://th.bing.com/th/id/Rccbbd1f23751753db70ef0705095e022?rik=jD7g0QROHz%2fCnw&pid=ImgRaw',
  },
  {
    name: 'Basundi',
    price: 2.50,
    category: 'Dairy',
    imageUrl: 'https://2.bp.blogspot.com/-0et_3y0flz0/T9Y3v4e_RcI/AAAAAAAAQNc/mIq9mMxdIpc/s1600/ba+six.jpg',
  },
  {
    name: 'Bhuna Khoya',
    price: 2.50,
    category: 'Dairy',
    imageUrl: 'https://th.bing.com/th/id/OIP.RafxV-fqUQp36udF8SkzbgHaFj?pid=ImgDet&rs=1',
  },
  {
    name: 'Blaand',
    price: 2.50,
    category: 'Dairy',
    imageUrl: 'https://www.happyhomestead.co.uk/uploads/2/3/5/6/23567020/dsc-0004_2_orig.jpg',
  },
  {
    name: 'Pineapple',
    price: 2.50,
    category: 'Fruits',
    imageUrl: 'https://th.bing.com/th/id/R29e756bd3e9cc44c4d2c76836e61180e?rik=2LqUj1b1bgdS4w&pid=ImgRaw',
  },
  {
    name: 'Grape Fruit',
    price: 2.50,
    category: 'Fruits',
    imageUrl: 'https://th.bing.com/th/id/R673afc5e8633729f4843b2786dc7601e?rik=%2bFtC03M07lR84A&pid=ImgRaw',
  },
  {
    name: 'Zucchini',
    price: 2.50,
    category: 'Vegetables',
    imageUrl: 'https://th.bing.com/th/id/R0c737b23a0badadf09ca8894f3b5e3c0?rik=laHjPYcJ%2f1s8qw&pid=ImgRaw',
  },
  {
    name: 'Accorn Sqash',
    price: 1.50,
    category: 'Vegetables',
    imageUrl: 'https://th.bing.com/th/id/OIP.H3rVSicyGc8T6pb3hd1BSQHaE_?pid=ImgDet&rs=1',
  },
];