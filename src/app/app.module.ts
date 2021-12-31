import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  
import { AppComponent } from './app.component';
import { AcceptedRequestsComponent } from './accepted-requests/accepted-requests.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AddRequestComponent } from './add-request/add-request.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PendingRequestsComponent } from './pending-requests/pending-requests.component';
import { SentRequestsComponent } from './sent-requests/sent-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceptedRequestsComponent,
    HomeComponent,
    AddRequestComponent,
    LoginComponent,
    PendingRequestsComponent,
    SentRequestsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
