import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { Cssn1Component } from './cssn1/cssn1.component';
import { Cssn10Component } from './cssn10/cssn10.component';
import { Cssn11Component } from './cssn11/cssn11.component';
import { Cssn13Component } from './cssn13/cssn13.component';
import { Cssn14Component } from './cssn14/cssn14.component';
import { Cssn15Component } from './cssn15/cssn15.component';
import { Cssn16Component } from './cssn16/cssn16.component';
import { Cssn17Component } from './cssn17/cssn17.component';
import { Cssn18Component } from './cssn18/cssn18.component';
import { Cssn2Component } from './cssn2/cssn2.component';
import { Cssn3Component } from './cssn3/cssn3.component';
import { Cssn4Component } from './cssn4/cssn4.component';
import { Cssn5Component } from './cssn5/cssn5.component';
import { Cssn6Component } from './cssn6/cssn6.component';
import { Cssn7Component } from './cssn7/cssn7.component';
import { Cssn8Component } from './cssn8/cssn8.component';
import { Cssn9Component } from './cssn9/cssn9.component';
import { LoginComponent } from './share/login/login.component';
import { MainComponent } from './share/main/main.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'cssn1', component: Cssn1Component },
  { path: 'cssn2', component: Cssn2Component },
  { path: 'cssn3', component: Cssn3Component },
  { path: 'cssn4', component: Cssn4Component },
  { path: 'cssn5', component: Cssn5Component },
  { path: 'cssn6', component: Cssn6Component },
  { path: 'cssn7', component: Cssn7Component },
  { path: 'cssn8', component: Cssn8Component },
  { path: 'cssn9', component: Cssn9Component },
  { path: 'cssn10', component: Cssn10Component },
  { path: 'cssn11', component: Cssn11Component },
  { path: 'cssn13', component: Cssn13Component },
  { path: 'cssn14', component: Cssn14Component },
  { path: 'cssn15', component: Cssn15Component },
  { path: 'cssn16', component: Cssn16Component },
  { path: 'cssn17', component: Cssn17Component },
  { path: 'cssn18', component: Cssn18Component },
  {
    path: "**",
    component: MainComponent, // 萬用路徑，路由沒有比對到，永遠會執行
  },
]


@NgModule({
  
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    anchorScrolling: 'enabled'

})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
