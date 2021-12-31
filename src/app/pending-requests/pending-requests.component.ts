import { Component, OnInit } from '@angular/core';
import { Request } from '../common/request';
import { RequestServiceService } from '../services/request-service.service';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {

  requests: Request[] = [];
  constructor(private requestService:RequestServiceService) { }

   ngOnInit() {
    this.listRequests();
  }
  listRequests() {
    this.requestService.getAllPendingRequests().subscribe(
      data => {
        this.requests = data;
      }
    );
   
  }

  accept(request:Request) {
    this.requestService.acceptRequest(request).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      }
     
   )
  }
  reject(request:Request) {
    this.requestService.rejectRequest(request).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      }
     
   )
  }
}
