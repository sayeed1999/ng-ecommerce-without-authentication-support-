import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {

  typesOfOrganics: string[] = [];
  selectedCategory: string = '';
  
  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.typesOfOrganics = this.productsService.getAllCategories;
  }

  selectCategory(category: string) {
    this.productsService.categoryEmitted.next(category);
    this.selectedCategory = category;
    //alert(this.selectedCategory); used for debugging!
  }

}
