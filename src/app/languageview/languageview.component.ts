import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-languageview',
  templateUrl: './languageview.component.html',
  styleUrls: ['./languageview.component.css']
})
export class LanguageviewComponent {

  @Input() language: any = {};

  opacity: number = 0;

  mouseEnter() {
    this.opacity = 1;
  }

  mouseLeave() {
    this.opacity = 0;
  }

}
