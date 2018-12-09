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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuItemComponent,
    MenuListComponent,
    ItemDetailsComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
