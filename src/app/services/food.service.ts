import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Food } from './models/food.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FoodApi {
  favFoods: FirebaseListObservable<any[]>;
  constructor(private http: Http) {
    this.favFoods = database.list('favFoods');
    }

  getFavFoods(){
    return this.favFoods;
  }

  getByCuisine(cuisine:string){
    return this.http.get(`http://www.bigoven.com/recipes`)
  }

  getByIngredient(ingredient:string){
    return this.http.get(`http://www.bigoven.com/recipes`)
  }

  getBySeasonal(event: string){
    return this.http.get(`http://www.bigoven.com/recipes`)
  }
}
