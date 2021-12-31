import { Component, OnInit } from '@angular/core';
import { User } from '../common/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = JSON.parse(localStorage.getItem("currentUser"));
  constructor() { }

  ngOnInit() {
  }

}
