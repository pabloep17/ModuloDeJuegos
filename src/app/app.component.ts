import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Modulo de juegos';

  verMenuMovil:boolean = true
  viewSelect:string = "Modulo de Juegos"

  public nav: Array<any> = [
    { name: "Inicio", href: "inicio"},
    { name: "Juegos", href: "juegos"},
    { name: "Información", href: "informacion"},
    { name: "Desarrollador", href: "desarrollador"},
    { name: "Versión", href: "version"},
  ];

  setViewSelect(v: string) {
    this.viewSelect = v
  }

  setVerMenuMovil(v: boolean) {
    this.verMenuMovil = v
  }

}
