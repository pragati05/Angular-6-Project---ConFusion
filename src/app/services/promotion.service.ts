import { Injectable } from '@angular/core';


import {Promotion} from '../shared/promotion';
import {PROMOTION } from '../shared/promotions';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  
  getPromotion (): Observable<Promotion[]> {
    return Observable.of(PROMOTION).delay(1200);
  }
  getPromotions(id: number): Observable<Promotion>{
    return Observable.of(PROMOTION.filter((dish)=> dish.id === id)[0]).delay(1200);
  }
  getFeaturedPromotion(): Observable<Promotion>{
    return Observable.of(PROMOTION.filter((dish) => (dish.featured))[0]).delay(1200);
  }
}
