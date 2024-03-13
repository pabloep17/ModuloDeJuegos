import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { updateUserData } from 'src/util/functions';

import { CommandService } from 'src/util/commandService';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent {

  localStorageData:string | null | any = {result: {computer: 5, player: 5}}

  cards: Card[] = [];
  cardsVisible: Card[] = [];
  cardsMatched: Card[] = [];

  parent: Component | any = AppComponent

  user:any = JSON.parse(localStorage.getItem('user') || '{}')

  constructor(private commandService: CommandService) {
    updateUserData(this.user.token, "jugando", {juego: "Memory", jugando: true}).then(e => {
      console.log(e)
    })
    this.initializeCards();
    this.localStorageData = localStorage.getItem("lastGame")
    this.localStorageData = JSON.parse(this.localStorageData)
    this.localStorageData.result = {
      player: 5
    }
    localStorage.setItem("lastGame", JSON.stringify(this.localStorageData))
    updateUserData(this.user.token, "memory", this.localStorageData).then(e => {
      console.log(e.code)
    })
  }

  initializeCards() {
    const values = ['https://pabloeguilazperez.github.io/PabloEguilazPerez/icons/java.svg', 'https://pabloeguilazperez.github.io/PabloEguilazPerez/icons/python.svg', 'https://pabloeguilazperez.github.io/PabloEguilazPerez/icons/react.svg', 'https://pabloeguilazperez.github.io/PabloEguilazPerez/icons/js.svg', 'https://pabloeguilazperez.github.io/PabloEguilazPerez/icons/html_5.svg', 'https://pabloeguilazperez.github.io/PabloEguilazPerez/icons/angular.svg'];
    values.forEach(value => {
      this.cards.push({ value: value, revealed: false });
      this.cards.push({ value: value, revealed: false });
    });
    this.shuffleCards();
    console.log(this.parent.errorTitle)
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  revealCard(card: Card) {
    if (!card.revealed) { 
      this.cardsVisible.push(card);
      card.revealed = true;
    }
    if (this.cardsVisible.length == 2) {
      if (this.cardsVisible[0].value != this.cardsVisible[1].value) {
        this.localStorageData.result.player -= 1
        updateUserData(this.user.token, "memory", this.localStorageData).then(e => {
          console.log(e)
        })
        if (this.localStorageData.result.player == 0) {
          this.commandService.sendCommand('{"accion": "mostrar_alerta", "titulo": "Has Perdido", "mensaje": "Se ten han acabado los intentos"}');
          //Reinicio el juego
          this.cardsVisible = [];
          this.cardsMatched = [];
          this.cards = [];
          this.initializeCards();
        }
        this.waitOneSecond().then(() => { 
          this.cardsVisible.forEach(card => card.revealed = false);
          this.cardsVisible = [];
        });
      }else {
        this.cardsVisible = [];
        this.cardsMatched.push(this.cardsVisible[0]);
        this.cardsMatched.push(this.cardsVisible[1]);
      }
    }
  }

  waitOneSecond(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  ngOnDestroy() {
    updateUserData(this.user.token, "jugando", {juego: "Memory", jugando: false}).then(e => {
      console.log(e)
    })
  }

}

interface Card {
  value: string;
  revealed: boolean;
}