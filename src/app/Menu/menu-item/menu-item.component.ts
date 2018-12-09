import { Component, OnInit, Input} from '@angular/core';
import {Item } from '../item.model';
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
@Input() item: Item;
  constructor() { }

  ngOnInit() {
  }

}
