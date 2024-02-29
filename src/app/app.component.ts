import { Component, ViewChild, HostListener } from '@angular/core';
import { MemoryComponent } from './memory/memory.component';
import { CommandService } from 'src/util/commandService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Modulo de juegos';

  user:any = JSON.parse(localStorage.getItem('user') || '{}')

  verAlerta:boolean = false
  errorTitle:string = ""
  errorMessaje:string = ""


  verDialogue:boolean = false
  searchBar:string = ""


  constructor(private commandService: CommandService) {}


  ngOnInit(): void {
    const urlActual = window.location;
    const urlObj = new URL(urlActual.toString());
    const pathname = urlObj.pathname;
    const partesRuta = pathname.split("/");
    const palabraInicio = partesRuta[partesRuta.length - 1];
    this.title = palabraInicio
    this.viewSelect = palabraInicio.charAt(0).toUpperCase() + palabraInicio.slice(1);

    this.commandService.getCommandObservable().subscribe(command => {
      const commandObj = JSON.parse(command);
      
      if (commandObj.accion === 'mostrar_alerta') {
        this.showAlert(commandObj.titulo, commandObj.mensaje);
      }

    });

  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.metaKey && event.key === 'b') {
      this.verDialogue = !this.verDialogue
    }
  }

  verMenuMovil:boolean = false
  viewSelect:string = "Inicio"

  public nav: Array<any> = [
    { name: "Inicio", href: "inicio"},
    { name: "Juegos", href: "juegos"},
    { name: "Información", href: "informacion"},
    { name: "Desarrollador", href: "desarrollador"},
    { name: "Versión", href: "version"},
  ];

  setViewSelect(v: string) {
    this.viewSelect = v
    this.title = v
  }

  setVerMenuMovil(v: boolean) {
    this.verMenuMovil = v
  }

  showAlert(alertTitle: string, alertMessage: string) {
    this.errorTitle = alertTitle
    this.errorMessaje = alertMessage
    this.verAlerta = true
  }

  closeAlert() {
    this.verAlerta = false
  }

}
