import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {

  constructor(private http:HttpClient) {
    this.http.get("https://jsonplaceholder.typicode.com/posts/1").subscribe(data => {
      console.log(data);
    });
   }

  ngOnInit() {
  }

}
