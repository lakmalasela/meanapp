import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../empservice.service';
import { Router } from '@angular/router';
import { log } from 'console';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  CredentialModel = { email: '', password: '' };

  constructor(private employeeService: EmployeeserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("LLLLLLLLLLLL ",this.CredentialModel);
    
    // this.employeeService.loginemployee(this.CredentailModel).subscribe(response => {
    //   console.log('User saved:', response);
    // });
    this.employeeService.loginemployee(this.CredentialModel).subscribe({
      next: (response) => {
        console.log('User saved:', response);
        alert("Login Successful");
        // Redirect to the employee list upon successful login
        this.router.navigate(['/employee-list']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Login failed');
      },
      complete: () => {
        console.log('Login request completed');
      }
    });
  }
  
}
