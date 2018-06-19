import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MovieSearch } from '../movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
  providers: [ MovieSearch ]
})

export class MovieFormComponent {
  movies: any[] = null;
  noMovies: boolean=false;
  constructor(private movieTitles = MovieSearch ) { }
  getMovies(name: string) {
    this.movies=null;
    this.movieTitles.getActorByName(name).subscribe(response => {
      if(response.json().movies.length > 0) {
        this.movies = response.json();
      }
    });
  }
}
