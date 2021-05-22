import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {

  selectedCategory: string = 'all';
  products: IProduct[] = [];
  showProducts: IProduct[] = [];
  searchTerm: string = '';

  onSearchTrigger() {
    //console.log(this.searchTerm) for debugging purpose!
    this.showProducts = this.products.filter(
      p => p.name.toLowerCase().indexOf(this.searchTerm.toLowerCase())!==-1
      && (p.category===this.selectedCategory || this.selectedCategory==='all') );
  }

  constructor(
    private productsService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts;
    this.showProducts = this.products;

    this.productsService.categoryEmitted.subscribe(
      (c: string) => {
        if(this.selectedCategory===c) return;
        this.selectedCategory = c;
        
        if(c==='all') this.showProducts = this.products;
        else {
          this.showProducts = this.products.filter((p: IProduct) => p.category===c);
        }
      },
    )
  }

}
