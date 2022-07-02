import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartDetails } from 'src/app/models/cart-details.model';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart | undefined;

  model: CartDetails = {
    fullName: '',
    address: '',
    creditCardNumber: '',
  };

  fullName: string = '';
  address: string = '';
  creditCardNumber: string = '';
  total: string = '0.00';

  constructor(
    private readonly router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.cart = this.cartService.getItemCart();
    this.total = this.cartService.getItemCartTotal();
  }

  onSub(): void {
  console.log(this.cartService.getItemCart())
    this.cartService.updateItemCartDetails(this.model);

    this.router.navigate(['/confirmation'], {
      queryParamsHandling: 'preserve',
    });
  }

  onRemoveFromCart(product: Product): void {
    this.cartService.removeItemCartProduct(product);
    this.getData();
  }
}