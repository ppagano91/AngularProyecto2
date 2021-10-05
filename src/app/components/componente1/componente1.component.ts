import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss'],
})
export class Componente1Component implements OnInit {
  constructor(public _usersService: UsersService) {}

  users: any[] = [];

  ngOnInit(): void {
    this._usersService.getUsers().subscribe((data) => (this.users = data));
  }
}
