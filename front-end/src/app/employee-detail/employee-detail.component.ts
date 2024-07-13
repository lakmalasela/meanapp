import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { EmployeeService } from '../employee.service';
import { EmployeeserviceService } from '../empservice.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private employeeService: EmployeeserviceService) { }
  topics: string[] = [];

  // userModel = new  User('Amal','abc@gmail.com',66466616,'','morning',true)
  EmployeeModel: any = {};


  ngOnInit(): void {
    this.getTopics();  }


  onSubmit() {
    this.employeeService.savemployee(this.EmployeeModel).subscribe(response => {
      console.log('User saved:', response);
    });
  }

  getTopics() {
    this.employeeService.getTopic().subscribe(topics => {
      this.topics = topics.map(topic => topic.name); // Extract 'name' property from objects if needed
      console.log('Topics:', this.topics); // Verify the data
      
    });
  }
}
