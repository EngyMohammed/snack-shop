import { Component, OnInit } from '@angular/core';
import {Item } from '../../item.model';
import {ItemsService} from '../../../services/items.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  public item: Item;
  public itemAmount: number =1;
  private sub;
  constructor(private route: ActivatedRoute, private dataserive: ItemsService ) { }

  ngOnInit() {
    this.route.params
    .subscribe(res => {
        this.getItem(res.id);
    });
  }
    getItem = (id) => {
      
      this.sub = this.dataserive.getProducts().subscribe(
        results => {this.item = (results.items.find(item => item.id == id))
      
        }
      );
      
    }
    changeAmount = (newItemAmount: number) =>
    {
      this.itemAmount= newItemAmount;
      console.log(this.itemAmount);
    }
    addItemtoBasket =  () =>
    {
      if(this.itemAmount > 0) 
      console.log(this.itemAmount+'itemAdded');
    }

}
