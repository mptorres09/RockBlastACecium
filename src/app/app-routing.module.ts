import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EntidadesComponent } from './entidades/entidades.component';
import { VisorComponent } from './visor/visor.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'entidades', component: EntidadesComponent},
  {path: 'visor', component: VisorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
