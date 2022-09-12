import { Observable, of } from 'rxjs';
import { map, catchError, switchMap, concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Movie } from './../interface/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
   private baseUrl: string;
   private apiKey: string;
   private s: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'https://www.omdbapi.com/';
    this.apiKey = '2dba97c6';
    this.s = 'lord';
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T>  => {
      console.error(error);

      return of(result as T);
    };
  }

  getMovies(page: number): Observable<Movie[]> {
    return this.http.get<any>(`${this.baseUrl}?apikey=${this.apiKey}&page=${page}&s=${this.s}`).pipe(
        map(movies => {
          return movies.Search || [];
        }),
  
  catchError(this.handleError<Movie[]>(`getMovies`, []))
    );
  }

  searchMovies(searchBy: string): Observable<Movie[]> {
    return this.http.get<any>(`${this.baseUrl}?apikey=${this.apiKey}&s=${searchBy}`).pipe(
        map(movies => {
          return movies.Search || [];
        }),
  
  catchError(this.handleError<Movie[]>(`getMovies`, []))
    );
  }
}
