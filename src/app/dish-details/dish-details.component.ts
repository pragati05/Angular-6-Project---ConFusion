import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Dish} from '../shared/dish';
import { DishService } from '../services/dish.service';
import {Comment} from '../shared/comment';

import 'rxjs/add/operator/switchMap';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {
  dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;
  commentForm: FormGroup;
  comments: Comment;
 

  formError={
    'author':'',
    'comment':'',
    'rating':''
  };
  validationMessages={
    'author': {
      'required':      'Author Name is required.',
      'minlength':     'Author Name must be at least 2 characters long.',
      'maxlength':     'Author Name cannot be more than 25 characters long.'
    },
    'comment': {
      'required':      'Comment  is required.',
      'minlength':     'Comment must be at least 2 characters long.',
      'maxlength':     'Comment cannot be more than 25 characters long.'
    },
  };
    
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) { 
      this.createForm();
    }
    createForm(): void{
      this.commentForm=this.fb.group({
        author: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]  ],
        comment: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
        rating:5,
        date: ''
      });
      this.commentForm.valueChanges.subscribe(data=>this.onValueChanged(data));
      this.onValueChanged();
    }
    onSubmit() {
      var date = new Date();
      var isoDateStr = date.toISOString();
      console.log('Date in ISO Format ', isoDateStr);
      this.commentForm.value.date = isoDateStr;
      this.dish.comments.push(this.commentForm.value);
      this.commentForm.reset({
        author: '',
        comment: '',
        rating: 5,
        date: ''
      });
    }
    onValueChanged(data?:any){
      if(!this.commentForm){
        return;
      }
      const form=this.commentForm;
      for(const field in this.formError){
        this.formError[field]='';

        const control=form.get(field);
        if(control && control.dirty && !control.valid){
          const messages=this.validationMessages[field];
          for ( const key in control.errors ) {
            this.formError[field] += messages[key] + '';
          }
        }

      }
    }
  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);

    this.route.params
      .switchMap((params: Params) => this.dishservice.getDish(+params['id']))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }
 goBack(): void{
   this.location.back();
 }
 setPrevNext(dishId: number) {
  let index = this.dishIds.indexOf(dishId);
  this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
  this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
}

}
