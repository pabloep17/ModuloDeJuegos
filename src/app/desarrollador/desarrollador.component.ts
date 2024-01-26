import { Component } from '@angular/core';

@Component({
  selector: 'app-desarrollador',
  templateUrl: './desarrollador.component.html',
  styleUrls: ['./desarrollador.component.css']
})
export class DesarrolladorComponent {

  firstname:string = ""
  lastname:string = ""
  email:string = ""
  body:string = ""

  send() {
    var formdata = new FormData();
    formdata.append("texto", `${this.firstname} ${this.lastname} / ${this.email}`);
    formdata.append("body", this.body);

    var requestOptions = {
      method: 'POST',
      body: formdata,
    };

    fetch("https://api.pabloeguilaz.es/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

}
