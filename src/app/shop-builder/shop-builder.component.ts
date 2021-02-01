import { Component, OnInit, Input } from '@angular/core';
import {Control} from './control.model';

@Component({
  selector: 'app-shop-builder',
  templateUrl: './shop-builder.component.html',
  styleUrls: ['./shop-builder.component.css']
})
export class ShopBuilderComponent implements OnInit {
  cart: any;
  constructor() { }

  ngOnInit(): void {
  }


}
