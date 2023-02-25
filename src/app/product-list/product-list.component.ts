import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('El producto a sido compartido con exito');
  }

  onNotify() {
    window.alert('Sedara una notificacion cuando este se venda');
  }
}
