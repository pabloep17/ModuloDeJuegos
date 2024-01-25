import { Component } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent {

  public juegos: Array<any> = [
    { name: "Piedra Papel Tijera",descripcion: "No se que puedo poner aqui", img: "https://media.istockphoto.com/id/1269211670/es/vector/rock-papel-tijeras-conjunto-de-iconos-de-partes-del-cuerpo.jpg?s=612x612&w=0&k=20&c=GUYVPaBrY6ZJQUIcJKj0n4uXee90wziYxg6YP1ZBcs4=", href: "juegos"},
    { name: "Real Sporting",descripcion: "Equipo de Primera", img: "https://www.realsporting.com/images/gijon-logo-1136f311e33d28a5453c84669240e4cb.png?vsn=d", href: "juegos"},
  ];

  buscador:string = ""

}
