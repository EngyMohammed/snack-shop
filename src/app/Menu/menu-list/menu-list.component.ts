import { Component, OnInit } from '@angular/core';
import {Item } from '../item.model';
import {ItemsService} from '../../services/items.service';
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
 constructor(private dataserive: ItemsService) { }
 public items: Item[];
  ngOnInit() {
    this.dataserive.getProducts().subscribe(
      (results => this.items = results.items)
    );
    
    console.log(this.items);
  }

}
