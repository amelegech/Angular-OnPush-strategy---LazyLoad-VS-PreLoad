import { Injectable } from '@angular/core';
import {observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MymyService {

  constructor(private http: HttpClient) { }
  postList(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
