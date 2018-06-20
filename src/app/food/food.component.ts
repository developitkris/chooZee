import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Food } from '../models/food.model';
import { foodApi } from '../api-keys';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
   //providers: [FoodApi]
})
export class FoodComponent implements OnInit {
  selectedCategory= null;


  constructor(private http: Http) { }

  ngOnInit() {
//  this.getByCategory();
  }

  getByCategory(keyword: string){
    event.preventDefault();
    event.stopPropagation();

  console.log(this.http.get(`http://food2fork.com/api/search?key=${foodApi}&q=${keyword}`));
  this.http.get(`http://food2fork.com/api/search?key=${foodApi}&q=${keyword}`).subscribe(response => {
    console.log(response.json().recipes);
    this.selectedCategory = response.json().recipes;
    console.log(this.selectedCategory);
  });
    }

  // addfav(cuisine, type, diet, event){
  //   console.log(cuisine);
  //   console.log(type);
  //   console.log(diet);
  //   console.log(event);
  //   let newFoodFav: Food= new Food("", "", "", "");
  //     // this.FoodService.addfav(newFoodFav);
  // }
}
