import { Component, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';
import { Product } from '../../models/products.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true);
  @Input({required: true}) car:Product[] = [];
  total = signal(0);

  toogleSideMenu(){
    this.hideSideMenu.update(prevStatus => !prevStatus);
  }

  ngOnChanges(changes: SimpleChanges){
    const car = changes['car'];
    if(car){
      this.total.set(this.calcularTotal());
    }
  }

  calcularTotal(){
    return this.car.reduce((total, product) => total + product.price, 0)
  }

}
