import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Movie } from '../movie';
import { MovieService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getHttpMovies().subscribe(movies => this.movies = movies);
  }

  drop(event: CdkDragDrop<Movie[]>){
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    this.movieService.saveMovies(this.movies);
  }
}
