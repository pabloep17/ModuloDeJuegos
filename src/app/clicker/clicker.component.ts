import { Component } from '@angular/core';
import { updateUserData } from 'src/assets/functions';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent {

  clickValue:number = 0

  contador:number = 0

  user:any = JSON.parse(localStorage.getItem('user') || '{}')
  localStorageData:string | null | any = {}

  ngOnInit() {
    updateUserData(this.user.token, "jugando", {juego: "Clicker", jugando: true}).then(e => {
      console.log(e)
    })
  }

  ngOnDestroy() {
    updateUserData(this.user.token, "jugando", {juego: "Clicker", jugando: false}).then(e => {
      console.log(e)
    })
  }

  aumentarContador() {
    
  }

}
