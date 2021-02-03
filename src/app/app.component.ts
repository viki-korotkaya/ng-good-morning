import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedTab = 'shop-builder';

  onNavigate(item: string): void{
    this.loadedTab = item;
  }

}
