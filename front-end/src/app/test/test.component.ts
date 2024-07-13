import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  styles:[`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red
    }
    .text-italic{
      font-style: italic
    }
    `]
})
export class TestComponent implements OnInit {

  @Input() public ParentData : any;
  @Output() public ChaildData = new EventEmitter();
  fireEventEmit = ()=>{
    this.ChaildData.emit('Im Child');
  }

  public name = "Lakmal";
  public locationget = location.href;
  public styleClass = "text-success";
  public isError = false;
  public isItalic = true;

  public sayname = "";

  public twoway = "";
  public classStyle ={
    "text-success": !this.isError,
    "text-danger": this.isError,
    "text-italic":this.isItalic

  }

  public display = false;

  getValue(value:any){
    console.log(value);
    
  }

  students = [
    {
      name: "Ashwin",
      age: 21
    },
    {
      name: "Kohli",
      age: 26
    }
  ]

  onClick(){
    this.sayname = "SAYYYYY";
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
