import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos/juegos.component';
import { InicioComponent } from './inicio/inicio.component';
import { InformacionComponent } from './informacion/informacion.component';
import { DesarrolladorComponent } from './desarrollador/desarrollador.component';
import { VersionComponent } from './version/version.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'juegos', component: JuegosComponent},
  { path: 'informacion', component: InformacionComponent},
  { path: 'desarrollador', component: DesarrolladorComponent},
  { path: 'desarrollador/resume/:id', component: DesarrolladorComponent},
  { path: 'version', component: VersionComponent},
  { path: 'version/:version', component: VersionComponent},
  { path: 'juegos/piedra-papel-tijera', component: PiedraPapelTijeraComponent},
  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
