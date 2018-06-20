import { Injectable } from '@angular/core';
// import { Movie } from './models/movie.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieSearch {

  constructor(private http: Http) { }

  getActorByName(name: string) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=357e76b265bade398b205c7b05084ffa&query=Jack+Reacher`)

  }
}

