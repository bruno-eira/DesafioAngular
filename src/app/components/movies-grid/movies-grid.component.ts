import { Movie } from './../../interface/movie';
import { DatabaseService } from './../../service/database.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.css']
})
export class MoviesGridComponent implements OnInit {
  movies: Movie[];
  searchStr: string;

  constructor(private db: DatabaseService) {
    this.searchStr = 'Lord';
    this.movies= [];
  }

  ngOnInit() {
    this.getMovies(1);
  }

  getMovies(page: number) {
    this.db.getMovies(page).subscribe(res => {
      this.movies = res;
    },
    error => console.log(error));
  }

  searchMovies() {
    this.db.searchMovies(this.searchStr).subscribe(res => {
      this.movies = res
    });
  }
}
