import { Component, OnInit } from '@angular/core';
import { HostsService } from './services/hosts.service';
import { take, takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vermuchefs-client';

  constructor(
    private _hostsSrv: HostsService
  ) {}

  ngOnInit(): void {
    this._hostsSrv.getAllHosts()
      .pipe(take(1))
      .subscribe(hosts => console.log(hosts));
  }
}
