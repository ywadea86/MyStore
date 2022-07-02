import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { CartDetails } from './models/cart-details.model';
import { Cart } from './models/cart.model';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItem:Cart;

  constructor() { 
    this.cartItem = {
      id: uuidv4(),
      products: [],
      details: {
        fullName: '',
        address: '',
        creditCardNumber: '',
      },
    };
  }
  getItemCart() {
    return this.cartItem;
  }
   getItemCartTotal() {
    return this.cartItem.products.reduce((previousValue:any, currentValue:any) =>previousValue + currentValue.price * currentValue.quantity,0).toFixed(2);
  }
  updateItemcartItemProducts(product: any) {
    if (
      !this.cartItem.products.some(
        (currentProduct:Product) => currentProduct.id === product.id
      )
    ) {
      this.cartItem.products.push(product);
    } else
      this.cartItem.products = this.cartItem.products.map(
        (currentProduct: Product) => {
          if (currentProduct.id === product.id) {
            return {
              ...currentProduct,
              quantity: product.quantity,
            };
          }
          return currentProduct;
        }
      );
    
    return this.cartItem;
  }

  removeItemCartProduct(products: Product) {
    console.log(products);
    this.cartItem.products = this.cartItem.products.filter(
      (currentProduct:Product) => currentProduct.id !== products.id
    );

    return this.cartItem;
  }

  updateItemCartDetails(details: CartDetails) {
    this.cartItem.details = details;
    return this.cartItem;
  }

  clearItemCart() {
    this.cartItem.products = [];
    this.cartItem.details = {
      fullName: '',
      address: '',
      creditCardNumber: '',
    };
    return this.cartItem;
  }

}
