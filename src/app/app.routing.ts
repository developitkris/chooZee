import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DrinksComponent } from './drinks/drinks.component';


const appRoutes: Routes = [ {
    path:'',
    component: AppComponent
},
{
    path:'drinks',
    component: DrinksComponent
}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);