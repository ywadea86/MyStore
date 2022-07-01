import { Component, OnInit, Input ,EventEmitter,Output} from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() products: Product;
  
  @Output() addToCartClick:EventEmitter<any> = new EventEmitter;
  
  count=0;

  constructor() {
    this.products={
      id: 1,
      name: "",
      price: 0.0,
      url: "",
      description: ""
    }
   }
  
  ngOnInit(): void {
    
  }
   handleAddToCartClick(product: Product): void {
    if (this.count > 0) {
      alert('Cart has been updated!');
      this.addToCartClick.emit({ ...product, quantity: this.count });
    } else {
      alert('Please add at least 1 product.');
    }
  }

   increment(): void {
    this.count++;
  }

  decrement(): void {
    if (this.count > 0) {
      this.count--;
    } else {
      this.count= 0;
    }
  }

  }


