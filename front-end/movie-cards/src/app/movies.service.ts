import { Injectable } from '@angular/core';
import { Movie } from './movie';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [];
  rootURL = "/api";

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.getHttpMovies().subscribe(movies => this.movies = movies);
  }

  //get movies from the backend server
  getHttpMovies(): Observable<Movie[]>{
    this.http.get<Movie[]>(this.rootURL+ '/movies').subscribe(response => console.log(response));
    return this.http.get<Movie[]>(this.rootURL + '/movies');
  }

  //send the new list back to the server to be saved
  saveMovies(movies: Movie[]){
    return this.http.post(this.rootURL + '/save', movies).subscribe(response => console.log(response));
  }
}