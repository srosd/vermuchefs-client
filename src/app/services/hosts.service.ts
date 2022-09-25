import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HostsApi } from '../api/hosts.api';
import { Host } from '../models/host.model';

const baseUrl = 'https://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class HostsService {

  constructor( 
    private hostApi: HostsApi 
    ) {}

  getAllHosts$(): Observable<Host[]> {
    return this.hostApi.getHosts();
  }

}
