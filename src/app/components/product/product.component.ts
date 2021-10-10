import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  // productData se define como "any" para poder utilizarlo en el html (no es una buena práctica que se defina como "any")
  @Input() productData: any;
  constructor() {}

  ngOnInit(): void {
    // console.log(this.productData);
  }
}
