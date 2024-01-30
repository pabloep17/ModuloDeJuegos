import { Component } from '@angular/core';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent {

  localStorageData:string | null | any = "" 

  computerSelection:number = 0
  computerSelectionImage:string | undefined = ""

  playerSelectionImage:string | undefined = ""

  msg:string = "Ya puedes jugar"

  setPlayerSelection(v:number) {
    
    this.computerSelection = this.getRandomArbitrary(1, 3)

    this.computerSelectionImage = this.selecciones.get(this.computerSelection)
    this.playerSelectionImage = this.selecciones.get(v)

    switch(this.computerSelection) {
      case 1:
        this.msg = v == 1 ? "Empate" : v == 2 ? "Jugador gana" : "Ordenador gana"
        break
      case 2:
        this.msg = v == 2 ? "Empate" : v == 3 ? "Jugador gana" : "Ordenador gana"
        break
      case 2:
        this.msg = v == 3 ? "Empate" : v == 1 ? "Jugador gana" : "Ordenador gana"
        break
    }

    if (this.msg == "Jugador gana") {
      this.localStorageData.result.player += 1
    } else if (this.msg == "Ordenador gana") {
      this.localStorageData.result.computer += 1
    }

    localStorage.setItem("lastGame", JSON.stringify(this.localStorageData))
    
  }

  selecciones:Map<number, string> = new Map()

  ngOnInit() {
    this.selecciones.set(1, "piedra")
    this.selecciones.set(2, "papel")
    this.selecciones.set(3, "tijera")

    this.localStorageData = localStorage.getItem("lastGame")
    this.localStorageData = JSON.parse(this.localStorageData)

  }

  getRandomArbitrary(min: number, max: number) {
    return Math.trunc(Math.random() * (max - min) + min);
  }


}
