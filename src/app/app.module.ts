import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaNundoComponent } from './hola-nundo/hola-nundo.component';
import { Req009Component } from './req009/req009.component';
import { Req010Component } from './req010/req010.component';
import { Req011Component } from './req011/req011.component';
import { Req012Component } from './req012/req012.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaNundoComponent,
    Req009Component,
    Req010Component,
    Req011Component,
    Req012Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
