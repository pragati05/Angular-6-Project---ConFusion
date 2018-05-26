import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Dish} from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  dish: Dish;
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let id =+this.route.snapshot.params['id'];
    this.dishservice.getDish(id).subscribe(
      dish=>this.dish=dish
    );
  }
 goBack(): void{
   this.location.back();
 }

}
