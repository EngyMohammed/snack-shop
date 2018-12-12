import { Component, OnInit } from '@angular/core';
import {Item } from '../../item.model';
import {Basket } from '../../../Basket/basket.model';
import {ItemsService} from '../../../services/items.service';
import {BasketService} from '../../../services/basket.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  public item: Item;
  public itemAmount:number = 1;
  private sub;
  constructor(private route: ActivatedRoute, private dataserive: ItemsService,private basketService: BasketService ) { }

  ngOnInit() {
    this.route.params
    .subscribe(res => {
        this.getItem(res.id);
    });
  }
  getItem = (id) => {
       this.sub = this.dataserive.getProducts().subscribe(
        results => {this.item = ((results.items).find(item => item.id == id))
      });}
    changeAmount = (newItemAmount: number) =>  this.itemAmount= newItemAmount;
     addItemtoBasket= () => {
       if(this.itemAmount > 0) {this.basketService.addToBasket(new Basket (this.item,this.itemAmount))}
    }
   ngOnDestroy() {
      this.sub.unsubscribe();
   }

}
