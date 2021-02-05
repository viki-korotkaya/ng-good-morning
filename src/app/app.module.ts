import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ShopBuilderComponent } from './shop-builder/shop-builder.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthComponent } from './auth/auth.component';
import { BuildControlComponent } from './shop-builder/build-control/build-control.component';
import { OrderSummaryComponent } from './shop-builder/order-summary/order-summary.component';
import { ControlItemComponent } from './shop-builder/build-control/control-item/control-item.component';
import { SliderComponent } from './about/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ShopBuilderComponent,
    OrdersComponent,
    AuthComponent,
    BuildControlComponent,
    OrderSummaryComponent,
    ControlItemComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
