import { Component, OnInit } from '@angular/core';
import { Request } from '../common/request';
import { RequestServiceService } from '../services/request-service.service';

@Component({
  selector: 'app-sent-requests',
  templateUrl: './sent-requests.component.html',
  styleUrls: ['./sent-requests.component.css']
})
export class SentRequestsComponent implements OnInit {

  requests: Request[] = [];
  constructor(private requestService:RequestServiceService) { }

    ngOnInit() {
    this.listSentRequests();
  }
  listSentRequests() {
    this.requestService.getAllPendingSentRequests().subscribe(
      data => {
        this.requests = data;
      }
    );
   
  }

}
