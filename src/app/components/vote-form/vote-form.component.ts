import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Host } from 'src/app/models/host.model';
import { HostsService } from '../../services/hosts.service';

@Component
({
  selector: 'app-vote-form',
  templateUrl: './vote-form.component.html',
  styleUrls: ['./vote-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VoteFormComponent implements OnInit {

  hosts$: Observable<Host[]>;
  form: FormGroup;
  
  constructor(
    private _hostsSrv: HostsService,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    
    this.form = this._fb.group({
      guest: [null, Validators.required],
      host: [null, Validators.required]
    });

    this.hosts$ = this._hostsSrv.getAllHosts$();
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}