import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adsd';
  today: number = Date.now();

  // getTime() {
  //   var date = new Date();
  //   var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
  //   document.getElementById("p1").innerHTML = current_time;
  // }
}
