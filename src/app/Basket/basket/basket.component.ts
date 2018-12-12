import { Component, OnInit } from '@angular/core';
import {BasketService} from '../../services/basket.service';
import {Basket} from '../basket.model';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  private basketList:Basket[];
  private totalPrice:number;
  constructor( private basketService:BasketService) { }

  ngOnInit() {
   this.basketService.basketListSubject.subscribe(res => {
      this.basketList = res;
      let total = 0;
      for(let basketItem of this.basketList) {
          total += basketItem.item.price * basketItem.amount;
      }
      this.totalPrice = total;
    }) ;
 
  }
  removeBasketItem = (index) =>  this.basketService.removeItemFromBasket(index);
  clearAll =() => this.basketService.removallItemsFromBasket();
}
