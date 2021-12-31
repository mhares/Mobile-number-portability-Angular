import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AcceptedRequestsComponent } from './accepted-requests/accepted-requests.component';
import { HomeComponent } from './home/home.component';
import { AddRequestComponent } from './add-request/add-request.component';
import { LoginComponent } from './login/login.component';
import { PendingRequestsComponent } from './pending-requests/pending-requests.component';
import { SentRequestsComponent } from './sent-requests/sent-requests.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/requests', component: AcceptedRequestsComponent },
  { path: 'home/pendingRequests', component: PendingRequestsComponent },
  { path: 'home/sentRequests', component: SentRequestsComponent},
  { path: 'home/add', component: AddRequestComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
