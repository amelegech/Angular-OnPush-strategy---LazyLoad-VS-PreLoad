import { Component, OnInit } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public allTodos:any
  constructor(private service: MyService) { }

  ngOnInit(): void {
    this.service.getToDo().subscribe((todo)=>{
      this.allTodos = todo
    })
  }

}
