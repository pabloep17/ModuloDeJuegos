import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegosComponent } from './juegos/juegos.component';
import { InicioComponent } from './inicio/inicio.component';
import { InformacionComponent } from './informacion/informacion.component';
import { DesarrolladorComponent } from './desarrollador/desarrollador.component';
import { VersionComponent } from './version/version.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { JuegoComponent } from './juego/juego.component';
import { VersionDetailComponent } from './version-detail/version-detail.component';
import { MemoryComponent } from './memory/memory.component';
import { LanguageviewComponent } from './languageview/languageview.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CountdownComponent } from './countdown/countdown.component';
import { SnakeComponent } from './snake/snake.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegosComponent,
    InicioComponent,
    InformacionComponent,
    DesarrolladorComponent,
    VersionComponent,
    PagenotfoundComponent,
    PiedraPapelTijeraComponent,
    JuegoComponent,
    VersionDetailComponent,
    MemoryComponent,
    LanguageviewComponent,
    LoginComponent,
    UserComponent,
    CountdownComponent,
    SnakeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
