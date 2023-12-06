import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <h3>Counter: {{counter}}</h3>
    <button (click)="increaseCounter()">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseCounter()">-1</button>

  `

})
export class CounterComponent {

  public counter: number = 20;

  increaseCounter(): void {
    this.counter += 1;
  }
  decreaseCounter(): void {
    this.counter -= 1;
  }
  reset(): void {
    this.counter = 20;
  }
}


