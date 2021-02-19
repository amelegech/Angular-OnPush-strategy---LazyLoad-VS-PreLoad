import { Injectable } from '@angular/core';

import{of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TodService {
 public myTodos = [{id:'1', todos:"Coding Angular "},{id:'2', todos: "daily standup"} ]
  constructor() { }
  getTodoLists(){
    return of(this.myTodos);
  }
}
