import { HttpClient } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from '../models/score.model';

const baseUrl = 'http://localhost:3000/scores';

@Injectable({
  providedIn: 'root'
})
export class ScoresApi {

  constructor( private http: HttpClient ) {}

  postScore(score: Score): Observable<void> {
    return this.http.post<void>(`${baseUrl}`, score);
  }

}