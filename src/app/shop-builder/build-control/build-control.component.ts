import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {Control} from '../control.model';

@Component({
  selector: 'app-build-control',
  templateUrl: './build-control.component.html',
  styleUrls: ['./build-control.component.css']
})
export class BuildControlComponent implements OnInit {
  @Output() changedControl = new EventEmitter<any>();

  controls: Control[] = [
    new Control('Espresso', 'espresso', 2.5),
    new Control('Americano', 'americano', 2.0),
    new Control('Cappuccino', 'cappuccino', 3.5),
    new Control('Latte', 'latte', 3.2),
    new Control('Big Joe', 'bigjoe', 5.0),
    new Control('Hot chocolate', 'hotchoc', 4.5)
  ];
  purchase: any = [];
  price: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onAddControl(item: Control){
    let index = this.purchase.findIndex(el => el.type === item.type);
    if (index >= 0){
      this.purchase[index].value += 1;
    } else {
      this.purchase.push({type: item.type, value: 1}) ;
    }

    let currentControl = this.controls.filter(el => el.type === item.type);
    this.price = + (this.price + currentControl[0].cost).toFixed(2);
    this.changedControl.emit(this.purchase);
  }

  onRemoveControl(item: Control){
    let index = this.purchase.findIndex(el => el.type === item.type);
    if (index >= 0){
      this.purchase[index].value -= 1;
      if (this.purchase[index].value === 0){
        this.purchase.splice([index], 1);
      }
      let currentControl = this.controls.filter(el => el.type === item.type);
      this.price = + (this.price - currentControl[0].cost).toFixed(2);
      this.changedControl.emit(this.purchase);
    }
  }
}
