import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoteFormComponent } from './components/vote-form/vote-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/vote', pathMatch: 'full' },
  { path: 'vote', component: VoteFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
