import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {

  @Input() product!: IProduct; //it will definitely be assigned, why worry?
  isAddedToCart: number = 0;

  constructor(
    private shopping: ShoppingService
  ) {}

  ngOnInit(): void {
    this.isAddedToCart = this.shopping.isProductOnCart(this.product.name);
  }

  addToCart() {
    this.shopping.addToCart( this.product );
    this.isAddedToCart = 1;
  }

  changeQuantity(i: number) {
    this.shopping.changeQuantity(this.product.name, i);
    this.isAddedToCart += i;
  }

}
