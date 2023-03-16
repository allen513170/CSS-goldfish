import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { Cssn9Component } from './cssn9/cssn9.component';
import { Cssn17Component } from './cssn17/cssn17.component';
import { Cssn10Component } from './cssn10/cssn10.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Cssn11Component } from './cssn11/cssn11.component';
import { Cssn13Component } from './cssn13/cssn13.component';
import { Cssn14Component } from './cssn14/cssn14.component';
import { Cssn15Component } from './cssn15/cssn15.component';
import { HeroService } from './hero.service';
import { Cssn16Component } from './cssn16/cssn16.component';
import { Cssn18Component } from './cssn18/cssn18.component';
import { ShareModule } from './share/share.module';

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
    Cssn8Component,
    Cssn9Component,
    Cssn17Component,
    Cssn10Component,
    Cssn11Component,
    Cssn13Component,
    Cssn14Component,
    Cssn15Component,
    Cssn16Component,
    Cssn18Component
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ShareModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
