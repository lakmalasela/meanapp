import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employees: any = [];

  constructor(private _employeeservice: EmployeeService) { 
   
  }

  ngOnInit(): void {
    // this._employeeservice.getemployees()
    // .subscribe(data => this.employees = data);
  }

}
