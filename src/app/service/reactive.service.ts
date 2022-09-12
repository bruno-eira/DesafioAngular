import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Reactive } from '../interface/reactive';

@Injectable({
  providedIn: 'root',
})
export class ReactiveService {
  private Url = "https://631b642efae3df4dcffd9e3c.mockapi.io/post";

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<Reactive[]> {
    return this.http
      .get<Reactive[]>(this.Url);
  }

  getOne(id: number): Observable<Reactive> {
    return this.http
      .get<Reactive>(this.getUrl(id));
  }

  create(reactive: Reactive): Observable<Reactive> {
    return this.http
      .post<Reactive>(this.Url, reactive);
  }

  update(reactive: Reactive): Observable<Reactive> {
    return this.http
      .put<Reactive>(this.getUrl(reactive.id), reactive);
  }

  delete(reactive: Reactive): Observable<any> {
    return this.http
      .delete<any>(this.getUrl(reactive.id));
  }

  private getUrl(id: number): string {
    return `${this.Url}/${id}`;
  }
}
