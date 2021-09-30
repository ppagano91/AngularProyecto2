import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  private OGmessage = 'hola!';
  private mensaje;

  constructor() {
    this.mensaje = this.OGmessage;
  }

  setMensaje(mensaje: string) {
    this.mensaje = mensaje;
  }

  getMensaje() {
    return this.mensaje;
  }

  resetMensaje() {
    this.setMensaje(this.OGmessage);
  }
}
