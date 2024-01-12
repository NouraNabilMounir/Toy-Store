import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Product } from '../../shared/models/Products';
import CartItem from '../../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  constructor() { }

  //Add new Product to cart
  addToCart(product: Product) :void {
    this.cart.items.push(new CartItem(product));
    console.log(this.cart);
  }

  //Display Cart elements 
  getCart(): Cart {
    return this.cart;
  }
}
