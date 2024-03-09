import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getResume, getStack, getTools, getCompetencies } from 'src/util/functions';
import { CommandService } from 'src/util/commandService';

@Component({
  selector: 'app-desarrollador',
  templateUrl: './desarrollador.component.html',
  styleUrls: ['./desarrollador.component.css']
})
export class DesarrolladorComponent {


  constructor(private route: ActivatedRoute, private commandService: CommandService) { }

  firstname:string = ""
  lastname:string = ""
  email:string = ""
  body:string = ""

  resume: any = [];
  tools: any = [];
  competencies: any = [];
  stack:any = [];

  id: string = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    });
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

    try {

      const headers = new Headers();
      headers.append("clientID", "76a384351ab5f38441e18e3c97033");

      const raw = JSON.stringify({
          option: "send_formulario_contacto",
          firstname: `${this.firstname}`,
          lastname: this.lastname,
          email: this.email,
          body: this.body,
      });

      const requestOptions = {
          method: "POST",
          headers: headers,
          body: raw,
      };

      const response = fetch("https://api.pabloeguilaz.es", requestOptions)

      this.commandService.sendCommand('{"accion": "mostrar_sucess_message", "titulo": "Mensaje Enviado", "mensaje": "El mesaje ha sido enviado correctamente. Gracias por contactar conmigo."}');

      this.firstname = ""
      this.lastname = ""
      this.email = ""
      this.body = ""

    } catch (error) {
        console.error('There was a problem with fetching the data:', error);
    }
  }
}
