import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  qty: number = 0;
  onHome: boolean = true;

  constructor(
    private shopping: ShoppingService,
  ) {
  }

  ngOnInit(): void {
    this.shopping.emit.subscribe(
      (totalQty) => {
        this.qty = totalQty;
      }
    )
    
  }

}
