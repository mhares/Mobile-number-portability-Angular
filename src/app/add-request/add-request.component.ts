import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Organization } from '../common/organization';
import { Request } from '../common/request';
import { User } from '../common/user';
import { OrganizationService } from '../services/organization.service';
import { RequestServiceService } from '../services/request-service.service';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {
  request: Request = new Request;
  submitted = false;
 
  user: User = JSON.parse(localStorage.getItem("currentUser"));
  fromOrganization: string;
  constructor(private requestService:RequestServiceService) { }

  ngOnInit() {
   
    console.log(this.user.userName);
    console.log(this.user.organization.name);
  }
 

  saveRequest():void {
    const data = {
      phoneNumber: this.request.phoneNumber,
    };
    this.requestService.createRequest(data,this.fromOrganization).subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

}
