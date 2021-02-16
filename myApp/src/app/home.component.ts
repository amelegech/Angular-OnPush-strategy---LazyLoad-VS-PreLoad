import { Component, OnInit } from '@angular/core';
import { MymyService } from './mymy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public allPosts:any
  constructor(private service: MymyService) { }

  ngOnInit(): void {
    this.service.postList().subscribe((item: any)=>{
      console.log('survice return an observable', item)
      this.allPosts = item;
    })
  }

}20
