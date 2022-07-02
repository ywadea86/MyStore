import { Component, EventEmitter, OnInit ,Output} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/product.service';
import { CartService } from 'src/app/cart.service';


//products: Product[];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() public addToCartClick: EventEmitter<any> = new EventEmitter();
 productList: Product[] = [] ;

  constructor( private productService: ProductService ,private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      const cart = this.cartService.getItemCart();

      this.productList = this.productService.updateProductQuantity(
        cart.products,
        products
      );
    });
  }
  onAddToCart(product: Product): void {
    this.cartService.updateItemcartItemProducts(product);
  }

}
