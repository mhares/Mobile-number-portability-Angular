import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:8080/users"; 
  constructor(private http: HttpClient) { }

  getAllUsers() {
    this.http.get<User[]>(this.url);
  }
}
