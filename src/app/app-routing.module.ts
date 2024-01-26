import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos/juegos.component';

const routes: Routes = [
  { path: 'inicio', component: JuegosComponent},
  { path: 'juegos', component: JuegosComponent},
  { path: 'informacion', component: JuegosComponent},
  { path: 'desarrollador', component: JuegosComponent},
  { path: 'version', component: JuegosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
