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
  updateProductQuantity(cartItemProducts: any, currentProducts: Product[]) {
    if (cartItemProducts.length === 0) {
      return currentProducts.map((product) => {
        return {
          ...product,
          quantity: 0,
        };
      });
    }

    return currentProducts.map((currentProduct: Product) => {
      const cartItemProduct = cartItemProducts.find(
        (product:any) => product.id === currentProduct.id
      );

      if (cartItemProduct) {
        return {
          ...currentProduct,
          quantity: cartItemProduct.quantity,
        };
      }

      return currentProduct;
    });
  }
}
