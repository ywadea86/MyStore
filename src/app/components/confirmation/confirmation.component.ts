import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  cart: Cart | undefined;

  fullName:any;
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
    this.fullName = this.cart.details.address;
    this.total = this.cartService.getItemCartTotal();
  }

  handleBackToProductListClick() {
    this.cartService.clearItemCart();
    this.router.navigate(['/'], {
      queryParamsHandling: 'preserve',
    });
  }


}
