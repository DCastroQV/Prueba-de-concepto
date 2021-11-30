import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolaNundoComponent } from './hola-nundo/hola-nundo.component';
import { Req009Component } from './req009/req009.component';
import { Req010Component } from './req010/req010.component';
import { Req011Component } from './req011/req011.component';
import { Req012Component } from './req012/req012.component';

const routes: Routes = [
  { path: 'holamundo', component: HolaNundoComponent },
  { path: 'req009', component: Req009Component },
  { path: 'req010', component: Req010Component },
  { path: 'req011', component: Req011Component },
  { path: 'req012', component: Req012Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
