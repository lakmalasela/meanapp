import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IEmployee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient){}

  private _url: string = "https://jsonplaceholder.typicode.com/users";

  getemployees(){
    return this.http.get<IEmployee[]>(this._url);
  //   return [
  //     {id:1,
  //       name:"Maheesh"
  //     },
  //     {id:2,
  //       name:"Chahar"
  //     },
  //     {id:3,
  //       name:"Head"
  //     }
  //   ]
  }

}
