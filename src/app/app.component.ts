import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Modulo de juegos';

  ngOnInit(): void {
    const urlActual = window.location;
    const urlObj = new URL(urlActual.toString());
    const pathname = urlObj.pathname;
    const partesRuta = pathname.split("/");
    const palabraInicio = partesRuta[partesRuta.length - 1];
    this.title = palabraInicio
    this.viewSelect = palabraInicio.charAt(0).toUpperCase() + palabraInicio.slice(1);
  }

  verMenuMovil:boolean = false
  viewSelect:string = "Inicio"

  public nav: Array<any> = [
    { name: "Inicio", href: "inicio"},
    { name: "Juegos", href: "juegos"},
    { name: "Información", href: "informacion"},
    { name: "Desarrollador", href: "desarrollador"},
    { name: "Versión", href: "version"},
  ];

  setViewSelect(v: string) {
    this.viewSelect = v
    this.title = v
  }

  setVerMenuMovil(v: boolean) {
    this.verMenuMovil = v
  }

}
