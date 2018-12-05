import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs'; // ReactiveX JavaScript rxjs 6.3.3

console.clear();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number;
  counterSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    const counter = interval(2000);

    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('What did you do!!! Error!!! ' + error)
      },
      () => {
        console.log('Observable is complete!')
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}
