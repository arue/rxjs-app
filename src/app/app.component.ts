import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs-app';
  list: Array<number> = [1, 2, 3];

  ngOnInit() {
    const test = of(this.list);
    test.subscribe(val => console.log("Val: " + val));
  }
}
