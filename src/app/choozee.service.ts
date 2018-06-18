import { Injectable } from '@angular/core';
import { Foods } from './models/foods.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FoodsService {
  favoriteFoods: FirebaseListObservable<any[]>;
  constructor(private database:AngularFireDatabase) {
    this.favoriteFoods=database.list('favFoods');
  }
  addFavFood(newfav:Food){
    this.favoriteFoods.push(newfav);
  }

  getFav
}
