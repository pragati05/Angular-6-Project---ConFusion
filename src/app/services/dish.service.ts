import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes (): Observable<Dish[]> {
 return Observable.of(DISHES).delay(1200);
  
  }
  getDish(id: number): Observable<Dish>{
   return Observable.of(DISHES.filter((dish)=> dish.id === id)[0]).delay(1200);
   

  }
  getFeaturedDish(): Observable<Dish>{
    return Observable.of(DISHES.filter((dish) => (dish.featured))[0]).delay(1200);
  }
}
