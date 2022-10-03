import { Injectable } from '@angular/core';
import { Movie } from './movie';
import {Observable, of} from 'rxjs';
import MoviesJSON from '../app/film.json';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = JSON.parse(JSON.stringify(MoviesJSON));
  rootURL = "/api";

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    const movies = of(this.movies);
    return movies;
  }

  getHttpMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.rootURL + '/movies');
  }

  saveMovies(movies: Movie[]){
    console.log(JSON.stringify(movies));
  }
}