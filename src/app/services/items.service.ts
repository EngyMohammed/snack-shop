import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ItemsService {

constructor(private httpClient: HttpClient) {}
 getProducts(){
    return this.httpClient
      .get<any>('https://api.myjson.com/bins/z9s2i');
  }
}