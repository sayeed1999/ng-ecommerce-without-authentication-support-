import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICartItem } from '../models/cart.model';
import { IProduct } from '../models/product.model';
import { IShopping } from '../models/shopping.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private cart: ICartItem[] = [];
  totalQty: number = 0;
  totalCost: number = 0;
  private shopping: IShopping = {
    cart: this.cart,
    totalCost: this.totalCost,
    totalQty: this.totalQty,
  };

  emit = new Subject<number>();
  emitShopping = new Subject<IShopping>();

  get getShopping() {
    return this.shopping;
  }

  get getCart() {
    return this.cart.slice(); //i am taking slice, not the original one, because when we will fetch it from database, it will be a slice! :) got it?
  }

  get getCost() {
    return this.totalCost;
  }

  isProductOnCart(productName: string): number { //number will also say how many! not only true/false;
    const i = this.cart.findIndex(c => c.product.name.toLowerCase()===productName.toLowerCase());
    if(i===-1) return 0;
    return this.cart[i].quantity;
  }

  addToCart(product: IProduct) { //should it return adding successful!?
    const i = this.cart.findIndex((item: ICartItem) => item.product.name===product.name);
    if(i===-1) { //not present in cart!
      this.cart.push({ 
        product, 
        quantity: 0,
      });
      this.changeQty(this.cart.length-1, 1);
      this.updateShopping();
    }
  }

  removeFromCart(itemIndex: number) {
    this.cart.splice(itemIndex, 1);
  }

  updateShopping() {    
    this.shopping = {
      cart: this.cart,
      totalQty: this.totalQty,
      totalCost: this.totalCost,
    }
    this.emitShopping.next(this.shopping);
  }

  changeQty(index:number, i:number) {
    this.totalQty += i;
    this.cart[ index ].quantity += i;
    //calculate price
    this.totalCost += (this.cart[ index ].product.price*i);
    
    //call remove from cart!
    if(this.cart[ index ].quantity===0) 
        this.removeFromCart( index );
    //emits..
    this.emit.next(this.totalQty);
    this.updateShopping();
  }

  changeQuantity(productName: string, i: number) {
    const itemIndex = this.cart.findIndex((i: ICartItem) => i.product.name===productName);
    this.changeQty(itemIndex, i);
  }

  changeQtyFromCart(cartIndex: number, i: number) {
    this.changeQty(cartIndex, i);
  }

  constructor() {}
}
