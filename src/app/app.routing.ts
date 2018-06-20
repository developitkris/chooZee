import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppComponent } from './app.component';
import { DrinkComponent } from './drink/drink.component';
import { FoodComponent } from './food/food.component';
import { MovieComponent } from './movie/movie.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const appRoutes: Routes = [
  {
    path:'',
    component: AppComponent
  },
  {
    path:'welcome',
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
    path:'food',
    component: FoodComponent
  },
  {
    path:'movie',
    component: MovieComponent
  },
  {
    path:'users',
    component: UserComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  
  {
    path: 'users/:id',
    component: UserDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
