import { Component } from '@angular/core';
import { updateUserData } from 'src/assets/functions';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent {

  user:any = JSON.parse(localStorage.getItem('user') || '{}')
  localStorageData:string | null | any = {result: {computer: 5, player: 5}}

  computerSelection:number = 0
  computerSelectionImage:string | undefined = ""

  playerSelectionImage:string | undefined = ""

  msg:string = "Ya puedes jugar"

  setPlayerSelection(v:number, e:string) {

    document.getElementById(e)?.classList.add("center")
    
    this.computerSelection = this.getRandomArbitrary(1, 4)
    this.computerSelectionImage = this.selecciones.get(this.computerSelection)
    this.playerSelectionImage = this.selecciones.get(v)

    switch(this.computerSelection) {
      case 1:
        this.msg = v == 1 ? "Empate" : (v == 2 ? "Jugador gana" : "Ordenador gana")
        break
      case 2:
        this.msg = v == 2 ? "Empate" : (v == 3 ? "Jugador gana" : "Ordenador gana")
        break
      case 3:
        this.msg = v == 3 ? "Empate" : (v == 1 ? "Jugador gana" : "Ordenador gana")
        break
      default:
        this.msg = "Error"
        break
    }

    if (this.msg == "Jugador gana") {
      this.localStorageData.result.computer -= 1
    } else if (this.msg == "Ordenador gana") {
      this.localStorageData.result.player -= 1
    }

    if (this.localStorageData.result.computer < 1) {
      if (window.confirm("Has ganado")) {

      }else {
        
      }
    }else if (this.localStorageData.result.player < 1) {
      window.alert("El Ordenador Gana")
    }

    localStorage.setItem("lastGame", JSON.stringify(this.localStorageData))

    console.table(this.localStorageData)
    
  }

  selecciones:Map<number, string> = new Map()

  ngOnInit() {

    updateUserData(this.user.token, "jugando", {juego: "Piedra Papel Tijera", jugando: true}).then(e => {
      console.log(e)
    })

    this.selecciones.set(1, "piedra")
    this.selecciones.set(2, "papel")
    this.selecciones.set(3, "tijera")

    this.localStorageData = localStorage.getItem("lastGame")
    this.localStorageData = JSON.parse(this.localStorageData)

  }

  getRandomArbitrary(min: number, max: number) {
    return Math.trunc(Math.random() * (max - min) + min);
  }

  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnDestroy() {
    updateUserData(this.user.token, "jugando", {juego: "Piedra Papel Tijera", jugando: false}).then(e => {

    })
  }

}
