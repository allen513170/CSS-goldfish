import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cssn2Component } from './cssn2/cssn2.component';
import { Cssn1Component } from './cssn1/cssn1.component';
import { Cssn3Component } from './cssn3/cssn3.component';
import { Cssn4Component } from './cssn4/cssn4.component';
import { Cssn5Component } from './cssn5/cssn5.component';
import { Cssn6Component } from './cssn6/cssn6.component';
import { Cssn7Component } from './cssn7/cssn7.component';
import { Cssn8Component } from './cssn8/cssn8.component';

@NgModule({
  declarations: [
    AppComponent,
    Cssn2Component,
    Cssn1Component,
    Cssn3Component,
    Cssn4Component,
    Cssn5Component,
    Cssn6Component,
    Cssn7Component,
    Cssn8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
