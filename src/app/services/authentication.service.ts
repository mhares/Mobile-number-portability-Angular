import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url = "http://localhost:8080/login";

  constructor(private http: HttpClient) { }
  
   login(userName: string, password: string) {
        return this.http.post<any>(this.url , { userName, password })
            .pipe(map(user => {
                // login successful if there's a user in the response
                if (user) {
                    // store user details and basic auth credentials in local storage 
                    // to keep user logged in between page refreshes
                    user.authdata = window.btoa(userName + ':' + password);
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  console.log(userName);
                }

                return user;
            }));
   }
  
   logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}
