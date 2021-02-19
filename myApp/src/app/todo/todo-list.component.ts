import { Component, OnInit } from '@angular/core';
import { TodService } from './tod.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public allTodos: any;
  public todoOfTheDay:any;
  constructor(private service: TodService) {}

  mytodo($event: any) {
    const holder = {
      id: Math.floor(Math.random() * 100),
      todos: $event.target.value,
    };
    this.todoOfTheDay = holder;
    console.log(this.todoOfTheDay);
  }
  addTodo() {
    this.allTodos = [...this.allTodos, this.todoOfTheDay];
    
  }
  deletHandler(id: any) {
    // const filtered = this.allTodos.filter((list: any) => {
    //   if (list.id !== id) {
    //     return list;
    //   }
    // });
    // this.allTodos = filtered;
    //#way 2
  this.allTodos =  this.allTodos.slice(id);
   
  }
  ngOnInit(): void {
    this.service.getTodoLists().subscribe((todo) => {
      this.allTodos = todo;
    });
  }
}
