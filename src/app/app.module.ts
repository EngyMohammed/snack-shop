import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ItemsService} from './services/items.service';
import { HeaderComponent } from './header/header.component';
import { MenuItemComponent } from './Menu/menu-item/menu-item.component';
import { MenuListComponent } from './Menu/menu-list/menu-list.component';
import { ItemDetailsComponent } from './Menu/menu-item/item-details/item-details.component';
import { BasketComponent } from './Basket/basket/basket.component';
import { AmountControlComponent } from './Menu/amount-control/amount-control.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuItemComponent,
    MenuListComponent,
    ItemDetailsComponent,
    BasketComponent,
    AmountControlComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
