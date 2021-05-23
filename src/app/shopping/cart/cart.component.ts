import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/models/cart.model';
import { IShopping } from 'src/app/models/shopping.model';
import { ShoppingService } from 'src/app/services/shopping.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [
    trigger('removeFromCart', [
      state('toBeRemoved', style({
        opacity: 1,
        transform: 'translateX(0)',
      })),
      state('removed', style({
        opacity: 0,
        transform: 'translateX(80vw)',
      })),
      transition('toBeRemoved => removed', animate(350)),
      transition('* => toBeRemoved', [
        style({
          opacity: 0,
          transform: 'translateX(-80vw)',
        }),
        animate(350, style({
          opacity: 1,
          transform: 'translateX(0)',
        }))
      ])
    ]),
  ]
})
export class CartComponent implements OnInit {
  state:string = 'toBeRemoved';

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
    let _time = 0;
    if(this.cart[index].quantity+i === 0) {
      this.state = 'removed';
      _time = 350;
    }
    setTimeout(() => this.shopping.changeQtyFromCart(index, i), _time); //same as the transition time period!
    setTimeout(() => this.state = 'toBeRemoved', _time);
    //what happens if cart not removed due to internet connection error!!
    
    //the below part should be executed once the data UPDATE in the database in successful!
  }
}
