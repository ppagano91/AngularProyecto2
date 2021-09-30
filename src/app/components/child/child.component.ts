import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Padre } from 'src/app/types/Padre';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() datosPadre: Padre;

  @Output() decirNombre = new EventEmitter<string>();
  @Output() enviarMensaje = new EventEmitter<string>();

  nombre = 'Luke Skywalker';

  constructor(public _messageService: MessageService) {
    this.datosPadre = {
      nombre: '',
    };
  }

  ngOnInit(): void {
    // this.decirNombre.emit(this.nombre);
  }

  hablarConMiPadre() {
    console.log('hola papa');
    this.enviarMensaje.emit('hola papa como estas?');
  }
}
