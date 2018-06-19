import { Injectable } from '@angular/core';
import { Drink } from '../models/drinks.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DrinkService {
  myDrink: FirebaseListObservable<any[]>;
  constructor(private database:AngularFireDatabase) { 
    this.myDrink=database.list('favorite');
  }
   
  addDrink(newDrink:Drink){
     this.myDrink.push(newDrink);
   }
  getDrink(){
    return this.myDrink;
  }
  getdrinkById(drinkid: number)
  {
    return this.database.object('drink/' + drinkid);
  }
  deleteDrink(todelete){
    var albumEntryInFirebase = this.getdrinkById(todelete.$key);
    albumEntryInFirebase.remove();
  }
  updateDrink(drink){
 var thisonetoupdate = this.getdrinkById(drink.$key);
 thisonetoupdate.update({name: drink.description});
  }
}
