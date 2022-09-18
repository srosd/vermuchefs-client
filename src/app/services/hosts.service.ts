import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HostsApi } from '../api/hosts.api';

const baseUrl = 'https://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class HostsService {

  constructor( 
    private hostApi: HostsApi 
    ) {}

  getAllHosts(): Observable<any> {
    return this.hostApi.getHosts();
  }

}
