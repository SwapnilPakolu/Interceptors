import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'interceptors';
  data 
  constructor(private http : HttpClient){}

  requestData()
  {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').
    subscribe(res=>{console.log(res),this.data= JSON.stringify(res)});
  }
  request404Data()
  {
    this.http.get('https://jsonplaceholder.typicode.com/todos/7878').subscribe(res=>console.log(res));
  }
}
