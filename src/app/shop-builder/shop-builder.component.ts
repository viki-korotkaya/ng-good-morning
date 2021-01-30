import { Component, OnInit } from '@angular/core';
import {Control} from './control.model';

@Component({
  selector: 'app-shop-builder',
  templateUrl: './shop-builder.component.html',
  styleUrls: ['./shop-builder.component.css']
})
export class ShopBuilderComponent implements OnInit {
  addedControlItem: Control;
  constructor() { }

  ngOnInit(): void {
  }


  onAddInCart(item){

  }
}
