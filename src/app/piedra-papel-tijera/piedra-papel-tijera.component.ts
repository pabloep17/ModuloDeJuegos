import { Component } from '@angular/core';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent {

  iaMove:number = 0
  playerMove:number = 0

  ngOnInit() {
    window.alert("H")
  }

}
