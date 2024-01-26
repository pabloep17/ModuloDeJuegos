import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modulodejuegos';

  pageTitle: string = '';

  verMenuMovil:boolean = false
  viewSelect:string = "Modulo de Juegos"

  public nav: Array<any> = [
    { name: "Piedra Papel Tijera", href: "juegos"},
    { name: "alkpsjdlk", href: "juegos"},
  ];

  ngOnInit() {
    this.pageTitle = document.title;
  }

}
