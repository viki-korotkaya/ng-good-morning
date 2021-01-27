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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ShopBuilderComponent,
    OrdersComponent,
    AuthComponent,
    BuildControlComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
