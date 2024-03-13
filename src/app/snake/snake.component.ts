import { Component, HostListener, OnInit } from '@angular/core';
import { CommandService } from 'src/util/commandService';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent {
  tablero: string[] = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
  jugadorActual: string = 'https://pabloeguilazperez.github.io/PabloEguilazPerez/icons/java.svg';
  ganador: string = '';

  constructor(private commandService: CommandService) { }

  ngOnInit(): void {

  }

  colocarFicha(index: number) {
    window.navigator.vibrate(200);
    if (this.tablero[index] === '-' && !this.ganador) {
      this.tablero[index] = this.jugadorActual;
      console.log(this.tablero[index])
      this.verificarGanador();
      this.jugadorActual = this.jugadorActual === 'https://pabloeguilazperez.github.io/PabloEguilazPerez/icons/java.svg' ? 'https://pabloeguilazperez.github.io/PabloEguilazPerez/icons/python.svg' : 'https://pabloeguilazperez.github.io/PabloEguilazPerez/icons/java.svg';
    }
  }

  verificarGanador() {
    const combinacionesGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const combinacion of combinacionesGanadoras) {
      const [a, b, c] = combinacion;
      if (
        this.tablero[a] !== '-' &&
        this.tablero[a] === this.tablero[b] &&
        this.tablero[a] === this.tablero[c]
      ) {
        this.ganador = this.tablero[a];
        this.commandService.sendCommand(`{"accion": "mostrar_alerta", "titulo": "Has Ganadoo", "mensaje": "<img src='${this.ganador}'/> ha ganado la partida"}`);
        //Reinicio el juego
        this.tablero = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
        this.ganador = '';
        break;
      }
      //Comporbar empate
      if (!this.tablero.includes('-') && !this.ganador) {
        this.commandService.sendCommand(`{"accion": "mostrar_alerta", "titulo": "Empate", "mensaje": "Nadie ha ganado la partida"}`);
        //Reinicio el juego
        this.tablero = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
        this.ganador = '';
      }
    }
  }
}
