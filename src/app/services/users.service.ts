import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(this.usersUrl);
  }

  getUserById(id: number | string) {
    return this.http.get<any>(`${this.usersUrl}/${id}`);
  }
}
