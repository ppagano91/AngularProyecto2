import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-uncle',
  templateUrl: './uncle.component.html',
  styleUrls: ['./uncle.component.scss'],
})
export class UncleComponent implements OnInit {
  constructor(public _messageService: MessageService) {}

  message = '';

  enviarMensaje() {
    console.log('enviando mensaje desde el tio');
    this._messageService.setMensaje(this.message);
  }

  showMessage() {
    console.log(this.message);
  }

  ngOnInit(): void {}
}
