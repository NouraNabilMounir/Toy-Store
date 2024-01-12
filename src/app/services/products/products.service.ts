import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
    getAllProducts(): Product[]{
      const products : Product[] = [
      {
        id: 1,
        title: "Toy 1",
        price: 100,
        color: "green",
        discount: 10,
        photo: "../assets/images/toy1.png"
      },
      {
        id: 2,
        title: "Toy 2",
        price: 100,
        color: "white",
        discount: 10,
        photo: "../assets/images/toy2.png"
      },
      {
        id: 3,
        title: "Toy 3",
        price: 100,
        color: "red",
        discount: 10,
        photo: "../assets/images/toy3.png"
      },
      {
        id: 4,
        title: "Toy 4",
        price: 100,
        color: "red",
        discount: 10,
        photo: "../assets/images/toy4.png"
      },
      {
        id: 5,
        title: "Toy 5",
        price: 100,
        color: "blue",
        discount: 10,
        photo: "../assets/images/toy5.png"
      },
      {
        id: 6,
        title: "Toy 6",
        price: 100,
        color: "black",
        discount: 10,
        photo: "../assets/images/toy6.png"
      },
      {
        id: 6,
        title: "Toy 7",
        price: 100,
        color: "black",
        discount: 10,
        photo: "../assets/images/toy7.png"
      },
      {
        id: 6,
        title: "Toy 8",
        price: 100,
        color: "black",
        discount: 10,
        photo: "../assets/images/toy8.png"
      },
      {
        id: 6,
        title: "Toy 9",
        price: 100,
        color: "black",
        discount: 10,
        photo: "../assets/images/toy9.png"
      },
    ]
    return products;
  }
  
}
