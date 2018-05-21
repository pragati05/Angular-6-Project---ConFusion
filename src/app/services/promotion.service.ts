import { Injectable } from '@angular/core';


import {Promotion} from '../shared/promotion';
import {PROMOTION } from '../shared/promotions'
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  
  getPromotion (): Promotion[] {
    return PROMOTION;
  }
  getPromotions(id: number): Promotion{
    return PROMOTION.filter((dish)=> dish.id === id)[0];

  }
  getFeaturedPromotion(): Promotion{
    return PROMOTION.filter((dish) => (dish.featured))[0];
  }
}
