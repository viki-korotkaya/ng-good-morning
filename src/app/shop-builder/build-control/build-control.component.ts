import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-control',
  templateUrl: './build-control.component.html',
  styleUrls: ['./build-control.component.css']
})
export class BuildControlComponent implements OnInit {
  controls: { label: string, type: string, cost: string }[] = [
    { label: 'Espresso', type: 'espresso', cost: '2.5$' },
    { label: 'Americano', type: 'americano', cost: '2.0$' },
    { label: 'Cappuccino', type: 'cappuccino', cost: '3.5$' },
    { label: 'Latte', type: 'latte', cost: '3.2$' },
    { label: 'Big Joe', type: 'bigjoe', cost: '5.0$' },
    { label: 'Hot chocolate', type: 'hotchoc', cost: '4.5$' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){

  }

  onRemove(){

  }
}
