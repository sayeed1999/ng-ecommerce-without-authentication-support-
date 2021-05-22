import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICartItem } from 'src/app/models/cart.model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  totalCost: number = 0;
  cart: ICartItem[] = [];

  //form fields
  name!: string; contact!: number; address!: string; subAddress!: string;
  mouseenter: boolean = false;

  constructor(
    private shoppingService: ShoppingService,
  ) {}

  ngOnInit(): void {
    let shoppingData = this.shoppingService.getShopping;
    this.cart = shoppingData.cart;
    this.totalCost = shoppingData.totalCost;
  }

  checkoutSubmit() {
    console.log(this.name, this.contact, this.address, this.subAddress)
  }
}
