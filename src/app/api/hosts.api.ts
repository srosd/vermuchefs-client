import { HttpClient } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/hosts';

@Injectable({
  providedIn: 'root'
})
export class HostsApi {

  constructor( private http: HttpClient ) {}

  getHosts(): Observable<Host[]> {
    return this.http.get<Host[]>(`${baseUrl}`);
  }

}