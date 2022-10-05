import { TestBed } from '@angular/core/testing';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { MovieService } from './movies.service';

import films from '../../../../film.json';

describe('MoviesService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieService);
  });

  it('should get the movies list from the server'), () =>{
    let actual;
    service.getHttpMovies().subscribe(movies => actual = movies);
    expect(actual).toContain(films);
  }

  it('should post to server and return posted list'), () => {
    let actual = service.saveMovies(JSON.parse(JSON.stringify(films)));
    expect(actual).toContain(films);
  }
});
