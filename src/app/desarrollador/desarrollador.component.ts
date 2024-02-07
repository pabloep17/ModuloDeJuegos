import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router) {

  }

  isVisible(elm:any) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
  
  goToSection(sectionId:string) {
    this.router.navigate(['/desarrollador#2'])
  }

  send() {
    var formdata = new FormData();
    formdata.append("firstname", this.firstname);
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
