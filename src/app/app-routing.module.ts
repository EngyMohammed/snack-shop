import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuListComponent } from './Menu/menu-list/menu-list.component';
import { ItemDetailsComponent } from './Menu/menu-item/item-details/item-details.component';
import { BasketComponent } from './Basket/basket/basket.component';
const routes: Routes = [
  { path: '', redirectTo: '/Menu', pathMatch: 'full' },
  { path: 'Menu', component: MenuListComponent  },
  { path: 'details/:id', component: ItemDetailsComponent },
  { path: 'Basket', component: BasketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
