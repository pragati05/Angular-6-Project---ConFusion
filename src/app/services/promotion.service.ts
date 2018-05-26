import { Injectable } from '@angular/core';


import {Promotion} from '../shared/promotion';
import {PROMOTION } from '../shared/promotions'
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  
  getPromotion (): Promise<Promotion[]> {
    return Promise.resolve(PROMOTION);
  }
  getPromotions(id: number): Promise<Promotion>{
    return Promise.resolve(PROMOTION.filter((dish)=> dish.id === id)[0]);

  }
  getFeaturedPromotion(): Promise<Promotion>{
    return Promise.resolve(PROMOTION.filter((dish) => (dish.featured))[0]);
  }
}
