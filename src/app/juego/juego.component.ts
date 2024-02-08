import { Component, Input } from '@angular/core';
import { JuegosComponent } from '../juegos/juegos.component';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {

  @Input() juego: any;
  @Input() parent: JuegosComponent | any;

  gameClick() {
    this.parent.gameClick(this.juego)
  }

}
