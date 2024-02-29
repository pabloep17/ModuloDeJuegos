import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Juegos');
  }

  public juegos: Array<any> = [
    { id: 1, name: "Piedra Papel Tijera",descripcion: "El juego de piedra papel tijera", img: "https://media.istockphoto.com/id/1269211670/es/vector/rock-papel-tijeras-conjunto-de-iconos-de-partes-del-cuerpo.jpg?s=612x612&w=0&k=20&c=GUYVPaBrY6ZJQUIcJKj0n4uXee90wziYxg6YP1ZBcs4=", href: "../juegos/piedra-papel-tijera"},
    { id: 2, name: "Money Clicker",descripcion: "El de la primera evaluacion ahora en web", img: "data:image/png;base64,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", href: "../juegos/clicker"},
    //{ id: 3, name: "Snake",descripcion: "El juego La serpiente", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsas7KKQTmL9G-hfwHEUXki6I3ScUF0wjRZA&s", href: "juegos"},
    { id: 4, name: "Memory",descripcion: "EL juego de la memoria", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIewGBqzuXgmPpIVEO-D-bshkSV2-x11z4ew&usqp=CAU", href: "../juegos/memory"},
  ];

  buscador:string = ""

  gameClick(v:any) {
    localStorage.setItem("lastGame", JSON.stringify(v))
  }
  
}
