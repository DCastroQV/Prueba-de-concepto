import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaNundoComponent } from './hola-nundo/hola-nundo.component';
import { InfoDesalComponent } from './info-desal/info-desal.component';
import { ConfigModuleComponent } from './config-module/config-module.component';
import { ConcursoComponent } from './concurso/concurso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HolaNundoComponent,
    InfoDesalComponent,
    ConfigModuleComponent
    ConcursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
