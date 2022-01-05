import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolaNundoComponent } from './hola-nundo/hola-nundo.component';

const routes: Routes = [
  { path: 'holamundo', component: HolaNundoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
