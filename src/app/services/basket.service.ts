import { Injectable } from '@angular/core';
import {Basket } from '../Basket/basket.model';
import {Item} from '../Menu/item.model';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public basketListSubject = new BehaviorSubject([]);
  constructor() { }
  addToBasket= (basketItem :Basket) => {
    const current = this.basketListSubject.getValue();
    const dup = current.find(c=>c.item.id === basketItem.item.id);
    if(dup) dup.amount += basketItem.amount;
    else current.push(basketItem);
    this.basketListSubject.next(current);
}
removeItemFromBasket = (index) => {
  const current = this.basketListSubject.getValue();
  current.splice(index,1);
  this.basketListSubject.next(current);
}
removallItemsFromBasket =() =>
{
  const current = [];
  this.basketListSubject.next(current);
}

}
