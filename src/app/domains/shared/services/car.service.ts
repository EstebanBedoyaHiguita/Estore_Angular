import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cart = signal<Product[]>([]);
  total = computed (() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0)
  })

  constructor() { }

  addToCArt(product:Product){
    this.cart.update(state => [...state, product]);
    
  }
}
