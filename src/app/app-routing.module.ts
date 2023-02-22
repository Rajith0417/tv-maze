import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedComponent } from './components/detailed/detailed.component';
import { ResultComponent } from './components/result/result.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'results', component: ResultComponent},
  { path: 'details', component: DetailedComponent}
  // { path: ':id', component: CustomerDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
