import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Drink } from '../models/drink.model';
import { DrinkService } from '../services/drink.service'

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css'],
  providers: [DrinkService]
})
export class DrinkComponent implements OnInit {
  randDrink = null;
  myAlcDrink = null;
  randomDrink = null;
  constructor(private http: Http, private DrinkService:DrinkService) { }

  ngOnInit() {
  // this.getDrink();
  }

  getDrink(keyword: string){
  console.log( this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`));
  this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`).subscribe(response => {
      this.randDrink = response.json().drinks[0];
      // this.myAlcDrink = response.json().drinks[0].strAlcoholic;
      // if(this.myAlcDrink === "Alcoholic")
      // {
      //   return alert("this is alcoholic")
      // }
      console.log(this.randDrink);

  },
  err => console.error(err),
  () => console.log('getDrink completed')
);

  }
getRandomDrink(){
  this.http.get("https://www.thecocktaildb.com/api/json/v1/1/random.php").subscribe(response => {
      this.randomDrink = response.json().drinks[0];

      console.log(this.randomDrink);
}
//   addFavDrink(alcohol, type, name){
//     console.log(alcohol);
//     console.log(type);
//     console.log(name);
//     let newDrink: Drink = new Drink(true, "", "");
//     this.DrinkService.addDrink(newDrink);
   }
