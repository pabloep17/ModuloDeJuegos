import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {


  @Input() dateType: string | any;
  @Input() time: number | any;

  firstDigit: string = ""
  secondDigit: string = ""

  ngOnChanges(changes: SimpleChanges): void {
    this.firstDigit = `transform: translateY(-${Math.floor(this.time / 10) * 40}px);`;
    this.secondDigit = `transform: translateY(-${(Number(this.time.toString().split('')[1])) * 40}px);`;;
  }

}
