import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { GenreListComponent } from './genre-list/genre-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieFormComponent,
    GenreListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
