import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Drink } from '../models/drinks.model';
import {DrinkService} from '../services/drinks.service'

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css'],
  providers: [DrinkService]
})
export class DrinksComponent implements OnInit {
  randDrink = null;
  constructor(private http: Http, private DrinkService:DrinkService) { }

  ngOnInit() {
  this.getDrinks();
  }
  getDrinks(){
  console.log( this.http.get("https://www.thecocktaildb.com/api/json/v1/1/random.php"));
  this.http.get("https://www.thecocktaildb.com/api/json/v1/1/random.php").subscribe(response => {
      console.log(response.json().drinks[0]);
      this.randDrink = response.json().drinks[0].strDrink;
    });
  }
addfav(description:string){
  // console.log(title);
  // console.log(poster);
  // console.log(overview);
  var newDrink: Drink = new Drink(description);
  this.DrinkService.addDrink(newDrink);
}
}