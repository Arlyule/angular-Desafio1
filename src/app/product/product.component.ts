import { Component,Input } from '@angular/core';
import { products, Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})



export class ProductComponent {
  products = products;
  @Input() product!:Product;

  constructor(private cartService:CartService){}


  addToCart(product: Product) {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }

  share() {
    window.alert('El producto a sido compartido con exito');
  }

  onNotify() {
    window.alert('Se dara una notificacion cuando este se venda');
  }

  display: boolean = false;

    showDialog() {
        this.display = true;
    }

    
}
