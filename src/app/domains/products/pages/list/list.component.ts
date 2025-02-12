import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from '@products/components/product/product.component';
import {Product} from '@shared/models/products.model';
import {HeaderComponent} from '@shared/componets/header/header.component'
import { CarService } from '@shared/services/car.service';
import { ProductService } from '@shared/services/product.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CarService);
  private productService = inject(ProductService);

  ngOnInit(){
    this.productService.getProducts()
    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error:()=> {

      }
    })
  }

  addToCart(product : Product){
    this.cartService.addToCArt(product)
  }

}
