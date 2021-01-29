import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-control',
  templateUrl: './build-control.component.html',
  styleUrls: ['./build-control.component.css']
})
export class BuildControlComponent implements OnInit {
  controls: { label: string, type: string, cost: number }[] = [
    { label: 'Espresso', type: 'espresso', cost: 2.5 },
    { label: 'Americano', type: 'americano', cost: 2.0 },
    { label: 'Cappuccino', type: 'cappuccino', cost: 3.5 },
    { label: 'Latte', type: 'latte', cost: 3.2 },
    { label: 'Big Joe', type: 'bigjoe', cost: 5.0 },
    { label: 'Hot chocolate', type: 'hotchoc', cost: 4.5 },
  ];
  purchase: {}[] = [];
  price: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(type: string){
    this.purchase[type] ? this.purchase[type] += 1 : this.purchase[type] = 1;
    let currentControl = this.controls.filter(el => el.type === type);
    this.price = + (this.price + currentControl[0].cost).toFixed(2);
  }

  onRemove(type: string){
    if (this.purchase[type] > 0){
      this.purchase[type] -= 1;
      let currentControl = this.controls.filter(el => el.type === type);
      this.price = + (this.price - currentControl[0].cost).toFixed(2);
    }
  }
}
