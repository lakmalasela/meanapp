import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public studnets: any = [];

  constructor(private _studentservice:StudentsService) { }


  ngOnInit(): void {
    this._studentservice.getstudents()
    .subscribe(data => this.studnets = data);
  }

}
