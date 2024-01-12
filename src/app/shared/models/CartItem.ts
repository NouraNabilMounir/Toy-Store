import { Product } from "./Products";
export default class CartItem {
  id!: number;
  product!: Product;
  quantity: number = 1;

  constructor(product: Product){
    this.product = product;
  }

  get itemPrice(): number {
    return this.product.price * this.quantity;
  }
}