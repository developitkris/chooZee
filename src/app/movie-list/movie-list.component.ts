import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [ ]
})
export class MovieListComponent {
  @Input() childMovies;
  constructor() { }


}
