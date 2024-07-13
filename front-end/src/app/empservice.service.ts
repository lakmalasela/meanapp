import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  private apiUrlemp = 'http://localhost:4000/Employee';

  private apiUrltopics = 'http://localhost:4000/topics'


  constructor(private http: HttpClient) { }

  savemployee(data: any): Observable<any> {
    console.log("SSSSSSSSSSSSSSSSSSSSS ",data);
    
    return this.http.post(`${this.apiUrlemp}`, data);
  }

  getEmp(): Observable<any> {
    return this.http.get(`${this.apiUrlemp}`);
  }

  getTopic(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrltopics}`);
  }
}
