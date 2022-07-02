import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: any | undefined;
  @Output() removeFromCartClick = new EventEmitter();
  count = 0 ;
  constructor() { }

  ngOnInit(): void {
  }
  increment(): void {
    this.count++;
  }

  decrement(): void {
    if (this.count > 0) {
      this.count--;
    } else {
      this.count = 0;
    }
  }

  handleRemoveFromCartClick(product: any): void {
    alert('Cart has been updated!');
    this.removeFromCartClick.emit({ ...product, quantity: 0 });
  }

}
