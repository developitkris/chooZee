// import { Component, OnInit } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// // import { Food } from './models/food.model';
// // import { FoodService } from './../services/food.service';


// @Component({
//   selector: 'app-food',
//   templateUrl: './food.component.html',
//   styleUrls: ['./food.component.css'],
//   //providers: [FoodService]
// })

// export class FoodComponent implements OnInit {
//   favFoods= null;
//   //constructor(private http: Http, private FoodService:FoodService) { }

//   ngOnInit() {
//    // this.getFavFoods();
//   }

//   getfavFoods(){
//   console.log( this.http.get("http://www.bigoven.com/recipes"));
//   //this.http.get("http://www.bigoven.com/recipes").subscribe(response => {
//     this.favFoods = response.json().results;
//     console.log(this.favFoods[0].id);
//     console.log(this.favFoods);
//   });
//     }

//   addfav(cuisine:string, type:string, diet:string, event:string){
//     console.log(cuisine);
//     console.log(type);
//     console.log(diet);
//     console.log(event);
//    // let newFoodFav: Food= new Food(cuisine, type, diet, event);
//      // this.FoodService.addfav(newFoodFav);
//   }

// }
