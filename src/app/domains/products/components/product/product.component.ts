import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/products.model';



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input ({required: true}) product!: Product;


  @Output() addToCart = new EventEmitter;

  addToCartHandler (){
    console.log('click form child');
    this.addToCart.emit('hola este es un mensaje desde el hijo' + this.product.title);
  }



}
