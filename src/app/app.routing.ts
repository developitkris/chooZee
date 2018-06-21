import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppComponent } from './app.component';
import { DrinkComponent } from './drink/drink.component';
import { FoodComponent } from './food/food.component';
import { MovieComponent } from './movie/movie.component';
import { DrinkFilterComponent } from './drink-filter/drink-filter.component';


const appRoutes: Routes = [
  {
    path:'',
    component: WelcomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path:'drinks',
    component: DrinkComponent
  },
  {
    path:'drink-filter',
    component: DrinkFilterComponent;
  },

  {
    path:'food',
    component: FoodComponent
  },
  {
    path:'movie',
    component: MovieComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
