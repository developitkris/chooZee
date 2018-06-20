import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Food } from '../models/food.model';
import { foodApi } from '../api-keys';
// import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',

  styleUrls: ['./food.component.css'],
  // providers: [FoodService]
})
export class FoodComponent implements OnInit {

  favFoods= null;
  constructor(private http: Http) { }

  ngOnInit() {
  this.getFavFoods();
  }

  getFavFoods(){
  console.log( this.http.get("http://food2fork.com/api/search?key=${foodApi}"));
  this.http.get("http://food2fork.com/api/search?key=${foodApi}").subscribe(response => {
    this.favFoods = response.json().results;
    console.log(this.favFoods[0].id);
    console.log(this.favFoods);
  });
    }

  addfav(cuisine, type, diet, event){
    console.log(cuisine);
    console.log(type);
    console.log(diet);
    console.log(event);
    let newFoodFav: Food= new Food("", "", "", "");
      // this.FoodService.addfav(newFoodFav);
  }

}
