import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import {observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttpClient) { }
     
  getEmployee(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  
}
