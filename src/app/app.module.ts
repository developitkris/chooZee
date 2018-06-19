import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DrinksComponent } from './drinks/drinks.component';
import { FoodComponent } from './food/food.component';


@NgModule({
  declarations: [
    AppComponent,
    DrinksComponent,
    FoodComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
