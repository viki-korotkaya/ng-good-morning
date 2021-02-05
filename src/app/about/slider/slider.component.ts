import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  imgArr: {name: string, imgPath: string}[] = [
    {name: 'coffeeshop1', imgPath: 'assets/images/coffeeshop1'},
    {name: 'coffeeshop2', imgPath: 'assets/images/coffeeshop2'},
    {name: 'coffeeshop3', imgPath: 'assets/images/coffeeshop3'},
    {name: 'coffeeshop4', imgPath: 'assets/images/coffeeshop4'}
  ];

  state = {
    index: 0,
    imgDuration: 5000
  };
  constructor() { }

  ngOnInit(): void {
  }

}
