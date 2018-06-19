import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MovieSearch } from '../movie.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
  providers: [ MovieSearch ]
})

export class MovieFormComponent implements OnInit {
  movie = null;
  constructor(private http: Http, private movieTitle: MovieSearch ) { }

  ngOnInit(){
    this.getMovie();
  }
  getMovie(){
    // console.log( this.http.get("https://api.themoviedb.org/3/search/movie?api_key=357e76b265bade398b205c7b05084ffa&query=Jack+Reacher"));
    this.http.get("https://api.themoviedb.org/3/search/movie?api_key=357e76b265bade398b205c7b05084ffa&query=Jack+Reacher").subscribe(response => {
      console.log(response.json().results[0].title);
    })

  }

}

// export class MovieFormComponent {
//   movies: any[] = null;
//   noMovies: boolean=false;
//   constructor(private movieTitle: MovieSearch ) { }
//   getMovies(name: string) {
//     this.movies=null;
//     this.movieTitle.getActorByName(name).subscribe(response => {
//       if(response.json().movies.length > 0) {
//         this.movies = response.json();
//       }
//     });
//   }
// }
