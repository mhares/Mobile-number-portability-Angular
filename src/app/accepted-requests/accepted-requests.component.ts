import { Component, OnInit } from '@angular/core';
import { Request } from '../common/request';
import { RequestServiceService } from '../services/request-service.service';

@Component({
  selector: 'app-accepted-requests',
  templateUrl: './accepted-requests.component.html',
  styleUrls: ['./accepted-requests.component.css']
})
export class AcceptedRequestsComponent implements OnInit {

  requests: Request[] = [];
  constructor(private requestService:RequestServiceService) { }

  ngOnInit() {
    this.listRequests();
  }
  listRequests() {
    this.requestService.getAllAcceptedRequests().subscribe(
      data => {
        this.requests = data;
      }
    );
   
  }

  
}
