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
  viewSelect:string = "Inicio"

  public nav: Array<any> = [
    { name: "Inicio", href: "inicio"},
    { name: "alkpsjdlk", href: "juegos"},
  ];

  setViewSelect(v: string) {
    this.viewSelect = v
  }

  ngOnInit() {
    this.pageTitle = document.title;
  }

}
