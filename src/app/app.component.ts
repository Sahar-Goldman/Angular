import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppCalculator {
  title = 'Angular app';
  // Data
  a: number = 0;
  b: number = 0;
  sum: number = 0;
  diff: number = 0;
  mult: number = 0;

  // Methods
  calc(a: number, b: number) {
    this.a =  a;
    this.b = b;
    this.sum = a + b;
    this.diff = a - b;
    this.mult = a * b;
  }
}
