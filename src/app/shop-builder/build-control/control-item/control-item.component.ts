import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Control} from '../../control.model';

@Component({
  selector: 'app-control-item',
  templateUrl: './control-item.component.html',
  styleUrls: ['./control-item.component.css']
})
export class ControlItemComponent implements OnInit {
  @Input() controlItem: Control;
  @Output() addedItem = new EventEmitter<Control>();
  @Output() removedItem = new EventEmitter<Control>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(item){
    this.addedItem.emit(item);
  }

  onRemove(item){
    this.removedItem.emit(item);
  }

}
