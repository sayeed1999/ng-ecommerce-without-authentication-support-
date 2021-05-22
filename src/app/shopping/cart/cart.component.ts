import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/models/cart.model';
import { IShopping } from 'src/app/models/shopping.model';
import { ShoppingService } from 'src/app/services/shopping.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: ICartItem[] = [];
  totalCost: number = 0;

  constructor(
    private shopping: ShoppingService
  ) {}

  ngOnInit(): void {
    this.cart = this.shopping.getCart;
    this.totalCost = this.shopping.getCost;
    //to catch all changes! is fetching newly smart?!
    this.shopping.emitShopping.subscribe(
      (shoppingCart: IShopping) => {
        this.cart = shoppingCart.cart;
        this.totalCost = shoppingCart.totalCost;
      }
    )
  }
  
  changeQty(index:number , i:number) {
    this.shopping.changeQtyFromCart(index, i);
    //so for some reason, it is coming updated in the this.cart here too!

    //the below part should be executed once the data UPDATE in the database in successful!
    // this.totalPrice += (this.cart[index].product.price*i);
    // if(this.cart[index].quantity === 0) {
    //   //this.cart = this.cart.filter(c => c.quantity>0); angular doesn't re-render *ngFor!!
    //   this.cart = [...this.cart.slice(0,index), ...this.cart.slice(index+1)]; //creating new array makes angular re-render on the DOM!

    // }
  }
}
