import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolaNundoComponent } from './hola-nundo/hola-nundo.component';
import { InfoDesalComponent } from './info-desal/info-desal.component';
import { ConcursoComponent } from './concurso/concurso.component';

const routes: Routes = [
   { path: 'infodesaltest', component: InfoDesalComponent},
   { path: 'holamundo', component: HolaNundoComponent },
   { path: 'concurso', component: ConcursoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
