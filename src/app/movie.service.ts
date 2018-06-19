import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieSearch {
  
  constructor(private http: Http) { }
  getActorByName(name: string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/550?original_title=api_key=357e76b265bade398b205c7b05084ffa`)
  }
}
