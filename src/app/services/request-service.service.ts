import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../common/request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../common/user';

   

@Injectable({
  providedIn: 'root'
})
  
  
export class RequestServiceService {
  user: User = JSON.parse(localStorage.getItem("currentUser"));
  
     private baseUrl = "http://localhost:8080/api";
     httpOptions = {
   headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': `Basic ` + btoa(`${this.user.userName}:${this.user.password}`)
    }
  )
    };
   constructor(private httpClient: HttpClient) { }
  getAllAcceptedRequests(): Observable<Request[]>{
    return this.httpClient.get<Request[]>(`${this.baseUrl}/acceptedRequests`,this.httpOptions);
   
  }

   getAllPendingRequests(): Observable<Request[]>{
    return this.httpClient.get<Request[]>(`${this.baseUrl}/pendingRequests`,this.httpOptions);
   
   }
  getAllPendingSentRequests(): Observable<Request[]>{
    return this.httpClient.get<Request[]>(`${this.baseUrl}/sentRequests`,this.httpOptions);
   
  }

  createRequest(data, fromOrganization: string): Observable<any> {
    console.log(`${this.user.userName}:${this.user.password}`);
    return this.httpClient.post(`${this.baseUrl}/requests/${fromOrganization}`,data,this.httpOptions);
  }


  acceptRequest(request: Request) {
    console.log(`${this.user.userName}:${this.user.password}`);
    return this.httpClient.post(`${this.baseUrl}/acceptRequest`,request,this.httpOptions);
  }
  
   rejectRequest(request: Request) {
    console.log(`${this.user.userName}:${this.user.password}`);
    return this.httpClient.post(`${this.baseUrl}/rejectRequest`,request,this.httpOptions);
  }
}
