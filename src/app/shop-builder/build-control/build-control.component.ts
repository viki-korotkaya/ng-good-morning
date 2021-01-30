import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {Control} from '../control.model';

@Component({
  selector: 'app-build-control',
  templateUrl: './build-control.component.html',
  styleUrls: ['./build-control.component.css']
})
export class BuildControlComponent implements OnInit {
  @Output() addedControl = new EventEmitter<Control>();
  @Output() removedControl = new EventEmitter<Control>();
  controls: Control[] = [
    new Control('Espresso', 'espresso', 2.5),
    new Control('Americano', 'americano', 2.0),
    new Control('Cappuccino', 'cappuccino', 3.5),
    new Control('Latte', 'latte', 3.2),
    new Control('Big Joe', 'bigjoe', 5.0),
    new Control('Hot chocolate', 'hotchoc', 4.5)
  ];
  purchase: {}[] = [];
  price: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onAddControl(item: Control){
    this.purchase[item.type] ? this.purchase[item.type] += 1 : this.purchase[item.type] = 1;
    let currentControl = this.controls.filter(el => el.type === item.type);
    this.price = + (this.price + currentControl[0].cost).toFixed(2);
    this.addedControl.emit(item);
  }

  onRemoveControl(item: Control){
    if (this.purchase[item.type] > 0){
      this.purchase[item.type] -= 1;
      let currentControl = this.controls.filter(el => el.type === item.type);
      this.price = + (this.price - currentControl[0].cost).toFixed(2);
      this.removedControl.emit(item);
    }
  }
}
