import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modulodejuegos';

  pageTitle: string = '';

  verMenuMovil:boolean = false
  viewSelect:string = ""

  ngOnInit() {
    this.pageTitle = document.title;
  }

}
