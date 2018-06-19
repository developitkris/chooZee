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


  constructor(private http: Http, private DrinkService:DrinkService) { }

  ngOnInit() {
  // this.getDrink();
  }
  
  getDrink(){
  console.log( this.http.get("https://www.thecocktaildb.com/api/json/v1/1/random.php"));
  this.http.get("https://www.thecocktaildb.com/api/json/v1/1/random.php").subscribe(response => {
      this.randDrink = response.json().drinks[0];
      console.log(this.randDrink);
      
  },
  err => console.error(err),
  () => console.log('getDrink completed')
);

  }
addfav(alcohol,type,name){
  // console.log(title);
  // console.log(poster);
  // console.log(overview);
  var newDrink: Drink = new Drink(true, "fun", "sour");
  this.DrinkService.addDrink(newDrink);
  console.log(newDrink)
}
}
