import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  nombre = 'Darth Vader';
  edad = 45;

  nombreHijo = 'desconocido';

  datos = {
    nombre: this.nombre,
    edad: this.edad,
  };

  obtenerNombreDelHijo(nombre: string) {
    this.nombreHijo = nombre;
  }

  escucharAmiHijo(mensaje: string) {
    console.log(`Mi hijo me dijo: ${mensaje}`);
  }

  constructor() {}

  ngOnInit(): void {}
}
