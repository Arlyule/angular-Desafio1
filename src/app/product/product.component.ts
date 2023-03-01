import { Component,Input } from '@angular/core';
import { products, Product } from '../products';
import { CartService } from '../cart.service';
import { MessageService } from "primeng/api";
import { PrimeNGConfig } from "primeng/api";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService]
})



export class ProductComponent {
  products = products;
  @Input() product!:Product;

  constructor(private cartService:CartService,private messageService: MessageService,
    private primengConfig: PrimeNGConfig){}


  addToCart(product: Product) {
      this.cartService.addToCart(product);
      this.messageService.add({
        severity: "success",
        detail: "Se agrega al carrito de compras",
      });
  
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

    ngOnInit() {
      this.primengConfig.ripple = true;
    }
  
}
