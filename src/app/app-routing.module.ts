import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cssn1Component } from './cssn1/cssn1.component';
import { Cssn2Component } from './cssn2/cssn2.component';
import { Cssn3Component } from './cssn3/cssn3.component';
import { Cssn4Component } from './cssn4/cssn4.component';
import { Cssn5Component } from './cssn5/cssn5.component';

const routes: Routes = [
  { path: 'cssn1', component: Cssn1Component },
  { path: 'cssn2', component: Cssn2Component },
  { path: 'cssn3', component: Cssn3Component },
  { path: 'cssn4', component: Cssn4Component },
  { path: 'cssn5', component: Cssn5Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
