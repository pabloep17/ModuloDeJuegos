import { Component } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent {
  public juegos: Array<any> = [
    { name: "Piedra Papel Tijera", img: "https://www.realsporting.com/images/gijon-logo-1136f311e33d28a5453c84669240e4cb.png?vsn=d", href: ""},
  ];
}
