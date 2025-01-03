import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './../../components/product/product.component';
import {Product} from './../../../shared/models/products.model';
import {HeaderComponent} from './../../../shared/componets/header/header.component'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now (),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/400/400?r=23',
        creationAt: new Date().toISOString(),

      },
      {
        id: Date.now (),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/400/400?r=123',
        creationAt: new Date().toISOString(),

      },
      {
        id: Date.now (),
        title: 'Pro 3',
        price: 100,
        image: 'https://picsum.photos/400/400?r=235',
        creationAt: new Date().toISOString(),

      }
    ];
    this.products.set(initProducts);
  };

  fromChild(event : string){
    console.log('estamos en el padre')
    console.log(event);

  }

}
