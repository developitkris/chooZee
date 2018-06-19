import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppComponent } from './app.component';
import { DrinkComponent } from './drink/drink.component';
const appRoutes: Routes = [
  {
    path:'',
    component: AppComponent
  },
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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

