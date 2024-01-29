import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  lastGamePlayed:string | null | any = ""

  ngOnInit() {
    this.lastGamePlayed = localStorage.getItem("lastGame")
    this.lastGamePlayed = JSON.parse(this.lastGamePlayed != undefined ? this.lastGamePlayed : "");
    console.table(this.lastGamePlayed)
  }

}
