import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.scss'],
})
export class Componente2Component implements OnInit, OnDestroy {
  // usersData: any;
  // arrayDeSubs: Subscription[] = [];
  user: any;

  // constructor(private http: HttpClient) {}
  constructor(public _usersService: UsersService) {}

  ngOnInit(): void {
    // this.usersData = [];
    // this.arrayDeSubs.push(
    //   this.http
    //     .get('https://jsonplaceholder.typicode.com/users')
    //     .subscribe((data) => {
    //       this.usersData = data;
    //       console.log(this.usersData);
    //     })
    // );
    this._usersService.getUserById(2).subscribe((data) => (this.user = data));
  }

  ngOnDestroy(): void {
    // this.arrayDeSubs.forEach((sub) => sub.unsubscribe());
  }
}
