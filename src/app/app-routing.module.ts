import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolaNundoComponent } from './hola-nundo/hola-nundo.component';
import { InfoDesalComponent } from './info-desal/info-desal.component';

const routes: Routes = [
    { path: '', component: HolaNundoComponent },
    { path: 'infodesaltest', component: InfoDesalComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
