import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IStudent} from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  private _url: string = "http://localhost:4000/country";


  
  getstudents(){
    // return this.http.get<IStudent[]>(this._url);
    return this.http.get<IStudent[]>(this._url);


  }
  saveStudent(){
    
  }
}
