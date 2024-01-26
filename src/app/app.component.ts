import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modulodejuegos';

  pageTitle: string = '';

  ngOnInit() {
    // Obtén el título de la página actual y asígnalo a la propiedad pageTitle
    this.pageTitle = document.title;
  }

}
