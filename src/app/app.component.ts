import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Modulo de juegos';

  ngOnInit(): void {
    initFlowbite();
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
  }

  setVerMenuMovil(v: boolean) {
    this.verMenuMovil = v
  }

}
