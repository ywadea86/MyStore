import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { CartDetails } from './models/cart-details.model';
import { Cart } from './models/cart.model';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart;

  constructor() { 
    this.cart = {
      id: uuidv4(),
      products: [],
      details: {
        fullName: '',
        address: '',
        creditCardNumber: '',
      },
    };
  }
  getCart() {
    return this.cart;
  }
   getCartTotal() {
    return this.cart.products
      .reduce(
        (accumulator:any, currentValue:any) =>
          accumulator + currentValue.price * currentValue.quantity,
        0
      )
      .toFixed(2);
  }
  updateCartProducts(product: any) {
    if (
      !this.cart.products.some(
        (currentProduct:any) => currentProduct.id === product.id
      )
    ) {
      this.cart.products.push(product);
    } else {
      this.cart.products = this.cart.products.map(
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
    }
    return this.cart;
  }

  removeCartProduct(product: Product) {
    this.cart.products = this.cart.products.filter(
      (currentProduct:any) => currentProduct.id !== product.id
    );

    return this.cart;
  }

  updateCartDetails(details: CartDetails) {
    this.cart.details = details;
    return this.cart;
  }

  clearCart() {
    this.cart.products = [];
    this.cart.details = {
      fullName: '',
      address: '',
      creditCardNumber: '',
    };
    return this.cart;
  }

}
