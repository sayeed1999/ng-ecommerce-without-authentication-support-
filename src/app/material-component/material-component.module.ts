import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
//import { MatIconModule } from '@angular/material/icon';
//import { MatIconModule } from '@angular/material/icon';
//import { MatIconModule } from '@angular/material/icon';
//import { MatIconModule } from '@angular/material/icon';
//import { MatIconModule } from '@angular/material/icon';
//import { MatIconModule } from '@angular/material/icon';
//import { MatIconModule } from '@angular/material/icon';
//import { MatIconModule } from '@angular/material/icon';
//import { MatIconModule } from '@angular/material/icon';
//import { MatIconModule } from '@angular/material/icon';
//import { MatIconModule } from '@angular/material/icon';
//import { MatIconModule } from '@angular/material/icon';
//import { MatIconModule } from '@angular/material/icon';




const MaterialComponents: any[] = [ //is an array of type any. how to fix it? :(
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatListModule,
  MatDividerModule,
  MatCardModule,
  MatTooltipModule,
  MatTableModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialComponentModule {}
