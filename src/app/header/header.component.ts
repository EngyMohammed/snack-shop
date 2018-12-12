import { Component, OnInit } from '@angular/core';
import {BasketService} from '../services/basket.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private shopName;
  private basketCount;
  constructor(private basketService : BasketService) {}
  ngOnInit() {
    this.shopName = "Snack Shop";
     this.basketService.basketListSubject .subscribe(res => {
      this.basketCount= res.length;
  });
  }

}
