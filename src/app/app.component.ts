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
  alertTypeIcon:string = ""


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
        this.showAlert(commandObj.titulo, commandObj.mensaje, "error");
      } else if (commandObj.accion === 'mostrar_sucess_message') {
        this.showAlert(commandObj.titulo, commandObj.mensaje, "success");
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

  showAlert(alertTitle: string, alertMessage: string, tipo:string = "error") {
    this.errorTitle = alertTitle
    this.errorMessaje = alertMessage
    this.verAlerta = true
    if (tipo === "error") {
      this.alertTypeIcon = `<div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
      <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    </div>`
    } else if (tipo === "success") {  
      this.alertTypeIcon = `<div class="flex items-center justify-center w-10 h-10 rounded-full border border-white cursor-pointer bg-emerald-500 text-emerald-50 shadow shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" class="fill-current"><path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"></path></svg></div>`
    }
  }

  closeAlert() {
    this.verAlerta = false
  }

}
