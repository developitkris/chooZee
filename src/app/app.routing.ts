import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieFormComponent } from './movie-form/movie-form.component';

const appRoutes: Routes = [
{
  path: '',
  component: MovieFormComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
