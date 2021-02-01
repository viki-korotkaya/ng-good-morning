import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Control} from '../../control.model';

@Component({
  selector: 'app-control-item',
  templateUrl: './control-item.component.html',
  styleUrls: ['./control-item.component.css']
})
export class ControlItemComponent implements OnInit {
  @Input() controlItem: Control;
  @Output() addedItem = new EventEmitter<void>();
  @Output() removedItem = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    this.addedItem.emit();
  }

  onRemove(){
    this.removedItem.emit();
  }

}
