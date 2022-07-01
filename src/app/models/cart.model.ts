import { Product } from './product.model';
import { CartDetails } from './cart-details.model';

export interface Cart {
  id: string;
  products: any;
  details: CartDetails;
}