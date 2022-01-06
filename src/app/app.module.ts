import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaNundoComponent } from './hola-nundo/hola-nundo.component';
import { InfoDesalComponent } from './info-desal/info-desal.component';
import { ConfigModuleComponent } from './config-module/config-module.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaNundoComponent,
    InfoDesalComponent,
    ConfigModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
