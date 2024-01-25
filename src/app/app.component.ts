import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modulodejuegos';
  
  verMenuMovil:boolean = true
  viewSelect:string = "sdsdsd"

  public navigation: Array<any> = [
    { name: "Piedra Papel Tijera", href: ""},
  ];

  select(view:string) {
    this.viewSelect = view
  }

}
