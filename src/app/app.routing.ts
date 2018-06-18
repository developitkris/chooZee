import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component'
const appRoutes: Routes = [
  {
    path:'',
    component: WelcomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
