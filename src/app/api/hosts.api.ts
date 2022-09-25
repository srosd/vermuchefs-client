import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Host } from '../models/host.model';

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