import { Injectable } from '@angular/core';
import { Movie } from './movie';
import {Observable, of} from 'rxjs';
import MoviesJSON from '../app/film.json';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = JSON.parse(JSON.stringify(MoviesJSON));

  constructor() { }

  getMovies(): Observable<Movie[]> {
    const movies = of(this.movies);
    return movies;
  }

  saveMovies(movies: Movie[]){
    console.log(JSON.stringify(movies));
  }
}