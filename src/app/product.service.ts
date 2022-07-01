import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _jsonURL = 'assets/data.json';
  constructor(private httpRequest:HttpClient) { 

  }
  getProducts(): Observable<Product[]> {
    return this.httpRequest.get<Product[]>(this._jsonURL);
  }
  updateProductQuantity(cartProducts: any, currentProducts: Product[]) {
    if (cartProducts.length === 0) {
      return currentProducts.map((product) => {
        return {
          ...product,
          quantity: 0,
        };
      });
    }

    return currentProducts.map((currentProduct: Product) => {
      const cartProduct = cartProducts.find(
        (product:any) => product.id === currentProduct.id
      );

      if (cartProduct) {
        return {
          ...currentProduct,
          quantity: cartProduct.quantity,
        };
      }

      return currentProduct;
    });
  }
}
