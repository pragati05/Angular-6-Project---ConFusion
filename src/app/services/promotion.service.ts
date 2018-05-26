import { Injectable } from '@angular/core';


import {Promotion} from '../shared/promotion';
import {PROMOTION } from '../shared/promotions'
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  
  getPromotion (): Promise<Promotion[]> {
    
    return new Promise(resolve =>{
      // Simulate server latecy with 2 second delay
      setTimeout(()=>resolve(PROMOTION),2000);
    });
  }
  getPromotions(id: number): Promise<Promotion>{
    return new Promise(resolve =>{
      // Simulate server latecy with 2 second delay
      setTimeout(()=>resolve(PROMOTION.filter((dish)=> dish.id === id)[0]),2000);
    });

  }
  getFeaturedPromotion(): Promise<Promotion>{
    return new Promise(resolve =>{
      // Simulate server latecy with 2 second delay
      setTimeout(()=>resolve(PROMOTION.filter((dish) => (dish.featured))[0]),2000);
    });
  }
}
