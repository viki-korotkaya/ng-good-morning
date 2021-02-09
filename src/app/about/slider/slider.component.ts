import {Component, OnInit, AfterContentInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterContentInit, OnDestroy {
  mounted: boolean = false;
  timer1: number;
  timer2: number;
  imgArr: {name: string, imgPath: string}[] = [
    {name: 'coffeeshop1', imgPath: 'assets/images/coffeeshop1.jpeg'},
    {name: 'coffeeshop2', imgPath: 'assets/images/coffeeshop2.jpg'},
    {name: 'coffeeshop3', imgPath: 'assets/images/coffeeshop3.jpg'},
    {name: 'coffeeshop4', imgPath: 'assets/images/coffeeshop4.jpg'}
  ];

  state = {
    index: 0,
    imgDuration: 5000
  };
  constructor() { }

  ngOnInit(): void {
    this.mounted = true;
    if (this.mounted){
      // this.timer();
      this.timer1 = setTimeout(function () {
        this.slideShow();
      }.bind(this), this.state.imgDuration);
    }
  }

  ngAfterContentInit(){}

  slideShow = () => {
    if (this.state.index === this.imgArr.length -1){
      this.state.index =  0;
    } else {
      let currentIndex = this.state.index;
      this.state.index = currentIndex + 1;
    }

    this.timer2 = setTimeout(function () {
      this.slideShow();
    }.bind(this), this.state.imgDuration);
  };

  ngOnDestroy(){
    this.mounted = false;
    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
  }

}
