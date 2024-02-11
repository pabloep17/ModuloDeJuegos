import { Component } from '@angular/core';
import { getResume, getStack, getTools, getCompetencies } from 'src/assets/config';

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

  resume: any = [];
  tools: any = [];
  competencies: any = [];
  stack:any = [];

  ngOnInit() {
    getStack().then(data => {
      this.stack = data
    });
    getTools().then(data => {
      this.tools = data
    })
    getResume().then(data => {
      this.resume = data
    })
    getCompetencies().then(data => {
      this.competencies = data
    })
  }

  getToolById(id:string) {
    return this.tools.find((tool:any) => tool.id === id)
  }
  
  goToSection(sectionId:string) {
    const elemento: any = document.getElementById(sectionId);
    var offset = 80; // Espacio de 10px antes del elemento
    var elementoPosicion = elemento.getBoundingClientRect().top;
    var posicionScroll = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo({
        top: elementoPosicion + posicionScroll - offset,
        behavior: 'smooth'
    });
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
