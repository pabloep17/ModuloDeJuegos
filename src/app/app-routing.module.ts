import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos/juegos.component';
import { InicioComponent } from './inicio/inicio.component';
import { InformacionComponent } from './informacion/informacion.component';
import { DesarrolladorComponent } from './desarrollador/desarrollador.component';
import { VersionComponent } from './version/version.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { VersionDetailComponent } from './version-detail/version-detail.component';
import { MemoryComponent } from './memory/memory.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ClickerComponent } from './clicker/clicker.component';

const routes: Routes = [
  { path: '', component: ClickerComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'informacion', component: InformacionComponent},
  { path: 'desarrollador', component: DesarrolladorComponent},
  { path: 'desarrollador/resume/:id', component: DesarrolladorComponent},
  { path: 'desarrollador/stack/:stack', component: DesarrolladorComponent},
  { path: 'version', component: VersionComponent},
  { path: 'version/:version', component: VersionDetailComponent},
  { path: 'juegos/piedra-papel-tijera', component: PiedraPapelTijeraComponent},
  { path: 'juegos/memory', component: MemoryComponent},
  { path: 'juegos/clicker', component: ClickerComponent},
  { path: 'juegos', component: JuegosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UserComponent},
  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
