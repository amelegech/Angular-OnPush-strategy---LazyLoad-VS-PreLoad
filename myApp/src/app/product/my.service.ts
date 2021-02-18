import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  

  constructor(private http: HttpClient) { }
  getToDo(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
}
