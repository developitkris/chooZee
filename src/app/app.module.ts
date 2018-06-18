import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DrinksComponent } from './drinks/drinks.component';
import { FoodComponent } from './food/food.component';


@NgModule({
  declarations: [
    AppComponent,
    DrinksComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
