import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(this.filteredProducts);
  }
  products = [
    { id: 1, description: 'Arroz', price: 2.2 },
    { id: 2, description: 'Fideos', price: 5.6 },
    { id: 3, description: 'Azucar', price: 8 },
    { id: 4, description: 'Sal', price: 12.4 },
    { id: 5, description: 'Harina', price: 20 },
    { id: 6, description: 'Sal Marina', price: null },
    { id: 7, description: null, price: null },
  ];

  filteredProducts = this.products.filter((product) => product.description);
}
