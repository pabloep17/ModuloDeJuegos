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
    formdata.append("firstname", this.firstname);
    formdata.append("lastname", this.lastname);
    formdata.append("email", this.email);
    formdata.append("body", this.body);

    var requestOptions = {
      method: 'POST',
      body: formdata,
    };

    fetch("https://api.pabloeguilaz.es/", requestOptions)
      .then(response => {})
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    this.firstname = ""
    this.lastname = ""
    this.email = ""
    this.body = ""
    
  }

}
