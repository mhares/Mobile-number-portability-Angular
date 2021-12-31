import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization } from '../common/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  private baseUrl = "http://localhost:8080/organizations";
  constructor(private httpClient: HttpClient) { }

  
  getAllOrganizations(): Observable<Organization[]>{

    return this.httpClient.get<Organization[]>(this.baseUrl);
  }

}
