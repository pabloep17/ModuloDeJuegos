import { Component } from '@angular/core';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent {

  cards: Card[] = [];
  cardsVisible: Card[] = [];
  cardsMatched: Card[] = [];

  constructor() {
    this.initializeCards();
  }

  initializeCards() {
    const values = ['https://pabloeguilazperez.github.io/PabloEguilazPerez/icons/java.svg', 'https://pabloeguilazperez.github.io/PabloEguilazPerez/icons/python.svg', 'https://pabloeguilazperez.github.io/PabloEguilazPerez/icons/react.svg', 'https://pabloeguilazperez.github.io/PabloEguilazPerez/icons/js.svg', 'https://pabloeguilazperez.github.io/PabloEguilazPerez/icons/html_5.svg', 'https://pabloeguilazperez.github.io/PabloEguilazPerez/icons/angular.svg'];
    values.forEach(value => {
      this.cards.push({ value: value, revealed: false });
      this.cards.push({ value: value, revealed: false });
    });
    this.shuffleCards();
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  revealCard(card: Card) {
    if (this.cardsVisible.length == 2) {
      return;
    }
    if (!card.revealed) {
      this.cardsVisible.push(card);
      card.revealed = true;
    }
    if (this.cardsVisible.length == 2) {
      if (this.cardsVisible[0].value != this.cardsVisible[1].value) {
        console.table(this.cardsVisible)
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

}

interface Card {
  value: string;
  revealed: boolean;
}