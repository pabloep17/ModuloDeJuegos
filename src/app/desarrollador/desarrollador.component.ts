import { Component } from '@angular/core';
import { cv, languages, getLenguageByName } from 'src/assets/config';

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

  cv: any = cv;
  languages: any = languages;
  getLenguageByName: any = getLenguageByName;
  
  goToSection(sectionId:string) {
    const element: any = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth"});
  }

  send() {
    var formdata = new FormData();
    formdata.append("firstname", `${this.firstname}`);
    formdata.append("lastname", this.lastname);
    formdata.append("email", this.email);
    formdata.append("body", this.body);

    var requestOptions = {
      method: 'POST',
      body: formdata
    };

    fetch("https://api.pabloeguilaz.es/", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    this.firstname = ""
    this.lastname = ""
    this.email = ""
    this.body = ""
    
  }

}
