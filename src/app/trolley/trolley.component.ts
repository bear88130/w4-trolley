import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trolley',
  templateUrl: './trolley.component.html',
  styleUrls: ['./trolley.component.scss']
})
export class TrolleyComponent implements OnInit {

  cake = 0;
  cakeTotal = 0;
  ice = 0;
  iceTotal = 0;
  strawberry = 0;
  strawberryTotal = 0;
  freight = 40; // 運費

  constructor() { }

  ngOnInit() {
  }

  minusCake() {
    if (Number(this.cake) <= 0) {
      this.cake = 0;
      this.cakeTotal = 0;
      return;
    }
    this.cake -= 1;
    this.cakeTotal = this.cake * 980;
  }

  addCake() {
    this.cake += 1;
    this.cakeTotal = this.cake * 980;
  }

  minusIce() {
    if (Number(this.ice) <= 0) {
      this.ice = 0;
      this.iceTotal = 0;
      return;
    }
    this.ice -= 1;
    this.iceTotal = this.ice * (230 - 20);
  }

  addIce() {
    this.ice += 1;
    this.iceTotal = this.ice * (230 - 20);
  }

  minusStrawberry() {
    if (Number(this.strawberry) <= 0) {
      this.strawberry = 0;
      this.strawberryTotal = 0;
      return;
    }
    this.strawberry -= 1;
    this.strawberryTotal = this.strawberry * (5 - 2);  }

  addStrawberry() {
    this.strawberry += 1;
    this.strawberryTotal = this.strawberry * (5 - 2);
  }

}
