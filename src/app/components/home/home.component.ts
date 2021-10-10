import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //Asignamos un string vacio a la variable "nombre"
  nombre = '';

  constructor() {}

  ngOnInit(): void {}

  cambiarNombre(nombre: string) {
    this.nombre = nombre;
  }
}
