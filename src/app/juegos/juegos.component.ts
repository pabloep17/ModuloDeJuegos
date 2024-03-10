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
    { id: 2, name: "Snake",descripcion: "El juego La serpiente", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsas7KKQTmL9G-hfwHEUXki6I3ScUF0wjRZA&s", href: "../juegos/snake"},
    { id: 3, name: "Memory",descripcion: "EL juego de la memoria", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIewGBqzuXgmPpIVEO-D-bshkSV2-x11z4ew&usqp=CAU", href: "../juegos/memory"},
  ];

  buscador:string = ""

  gameClick(v:any) {
    localStorage.setItem("lastGame", JSON.stringify(v))
  }
  
}
