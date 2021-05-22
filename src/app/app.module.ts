import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './home/category/category.component';
import { ProductsComponent } from './home/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentModule } from './material-component/material-component.module';
import { CartComponent } from './shopping/cart/cart.component';
import { ProductComponent } from './home/products/product/product.component';
import { CheckoutComponent } from './shopping/checkout/checkout.component';
import { OrderProcessComponent } from './shopping/order-process/order-process.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoryComponent,
    ProductsComponent,
    CartComponent,
    ProductComponent,
    CheckoutComponent,
    OrderProcessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
