import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { TodoListComponent } from './todo-list.component';
import { TodService } from './tod.service';


const routes:Routes=[
  {path:'todoList', component: TodoListComponent}
]
@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[TodoListComponent],
  providers:[TodService]
})
export class TodoModule { }
