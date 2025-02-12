import { Component, inject, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true);
  private cartService = inject(CarService)
  cart = this.cartService.cart;
  total = this.cartService.total;



  toogleSideMenu(){
    this.hideSideMenu.update(prevStatus => !prevStatus);
  }

 
  

}
