import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('appOpen', [
      state('start', style({
        //top: -50vh dewa ase html e!
      })),
      state('middle', style({
        top: '50vh',
      })),
      state('done', style({
        top: '120vh',
      })),
      transition('* => middle', animate(1250)),
      transition('middle => done', animate(800))
    ]),
  ]
})
export class AppComponent {
  title = 'ng-ecommerce';
  state = 'start';

  ngOnInit() {
    this.state = 'middle';
    setTimeout(() => this.state = 'done', 3000);
    setTimeout(() => this.state = 'removeFromDOM', 3800);
  }
}
