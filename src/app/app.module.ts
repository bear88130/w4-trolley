import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrolleyComponent } from './trolley/trolley.component';
import { ShopComponent } from './shop/shop.component';
import { FinishComponent } from './finish/finish.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommodityComponent } from './commodity/commodity.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TrolleyComponent,
    ShopComponent,
    FinishComponent,
    PageNotFoundComponent,
    CommodityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
