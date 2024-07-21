import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TestComponent } from './test/test.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import {EmployeeService}from './employee.service';
import {HttpClientModule} from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  // all components are declare here
  declarations: [
    AppComponent,
    // TestComponent,
    // EmployeeListComponent,
    // EmployeeDetailComponent,
    StudentComponent,routingComponents, PageNotFoundComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],//register the service
  bootstrap: [AppComponent]
})
export class AppModule { }
