import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Item} from '../Menu/item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

constructor(private httpClient: HttpClient) {}
 getProducts(){
    return this.httpClient
      .get<Item[]>('https://api.myjson.com/bins/z9s2i');
  }
}