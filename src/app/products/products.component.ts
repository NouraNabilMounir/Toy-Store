import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../shared/models/Products';
import { ProductsService } from '../services/products/products.service';
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  products:Product[];
  constructor(private productService: ProductsService, private cartService: CartService){
    this.products = productService.getAllProducts();
  }
  addCartItem(item: Product){
    this.cartService.addToCart(item);
  }


  // at product service
  // products = [
  //   {
  //     id: 1,
  //     title: "Toy 1",
  //     price: 100,
  //     color: "green",
  //     discount: 10,
  //     photo: "../assets/images/toy1.png"
  //   },
  //   {
  //     id: 2,
  //     title: "Toy 2",
  //     price: 100,
  //     color: "white",
  //     discount: 10,
  //     photo: "../assets/images/toy2.png"
  //   },
  //   {
  //     id: 3,
  //     title: "Toy 3",
  //     price: 100,
  //     color: "red",
  //     discount: 10,
  //     photo: "../assets/images/toy3.png"
  //   },
  //   {
  //     id: 4,
  //     title: "Toy 4",
  //     price: 100,
  //     color: "red",
  //     discount: 10,
  //     photo: "../assets/images/toy4.png"
  //   },
  //   {
  //     id: 5,
  //     title: "Toy 5",
  //     price: 100,
  //     color: "blue",
  //     discount: 10,
  //     photo: "../assets/images/toy5.png"
  //   },
  //   {
  //     id: 6,
  //     title: "Toy 6",
  //     price: 100,
  //     color: "black",
  //     discount: 10,
  //     photo: "../assets/images/toy6.png"
  //   },
  //   {
  //     id: 6,
  //     title: "Toy 7",
  //     price: 100,
  //     color: "black",
  //     discount: 10,
  //     photo: "../assets/images/toy7.png"
  //   },
  //   {
  //     id: 6,
  //     title: "Toy 8",
  //     price: 100,
  //     color: "black",
  //     discount: 10,
  //     photo: "../assets/images/toy8.png"
  //   },
  //   {
  //     id: 6,
  //     title: "Toy 9",
  //     price: 100,
  //     color: "black",
  //     discount: 10,
  //     photo: "../assets/images/toy9.png"
  //   },
  // ]
}
