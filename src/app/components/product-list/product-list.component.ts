import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(this.filteredProducts);
  }

  products = [
    { id: 1, description: 'Arroz', price: 2.6 },
    { id: 2, description: 'Fideos', price: 5.6 },
    { id: 3, description: 'Azucar', price: 8 },
    { id: 4, description: 'Sal', price: 12.4 },
    { id: 5, description: 'Harina', price: 78 },
    { id: 6, description: 'Sal Marina', price: null },
    { id: 7, description: null, price: null },
  ];

  filteredProducts = this.products.filter((product) => product.description);

  saludar = () => {
    console.log('hola');
  };
}
