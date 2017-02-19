import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spaceScreens: Array<any>;
  temp: string;

  constructor(private http:Http) {

    this.http.get('assets/data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);

    this.http.get('http://localhost:3000/api/temp')
      .map(response => response.json())
      .subscribe(res => this.temp = res);

  }

  likeMe(i) {
    if (this.spaceScreens[i].liked == 0)
      this.spaceScreens[i].liked = 1;
    else
      this.spaceScreens[i].liked = 0;
  }

  deleteMe(i) {
    this.spaceScreens.splice(i,1);
    console.log(i);
  }

}


