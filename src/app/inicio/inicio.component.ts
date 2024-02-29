import { Component } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  lastGamePlayed:string | null | any = ""

  countdownDate: Date | any;
  days: number | any;
  hours: number | any;
  minutes: number | any;
  seconds: number | any;
  countdownInterval: any;

  content: any = {}

  ngOnInit() {
    
    this.lastGamePlayed = localStorage.getItem("lastGame")
  
    try {
      this.lastGamePlayed = JSON.parse(this.lastGamePlayed != undefined ? this.lastGamePlayed : "");
    } catch (error) {
      console.log("NO HAY JUEGOS JUGADOS")
    }

    /*
    getInicio().then(data => {
      this.content = data
    })
    */

    this.countdownDate = new Date('2024-04-10T00:00:00');
    this.updateCountdown()

  }

  ngOnDestroy(): void {
    // Al destruir el componente, asegurarse de limpiar el intervalo
    this.clearInterval();
  }

  updateCountdown(): void {
    // Calcular la diferencia de tiempo entre la fecha actual y la fecha de finalización
    const now = new Date().getTime();
    const distance = this.countdownDate.getTime() - now;

    // Si la diferencia de tiempo es negativa, detener la cuenta regresiva
    if (distance <= 0) {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.clearInterval();
    } else {
      // Calcular los días, horas, minutos y segundos restantesç
      
      this.days = Math.floor(Math.floor(distance / (1000 * 60 * 60 * 24))).toString().padStart(2, "0")
      this.hours = Math.floor(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).toString().padStart(2, "0");
      this.minutes = Math.floor(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).toString().padStart(2, "0");
      this.seconds = Math.floor(Math.floor((distance % (1000 * 60)) / 1000)).toString().padStart(2, "0");

      // Si no ha llegado a cero, actualizar la cuenta regresiva cada segundo
      this.countdownInterval = setTimeout(() => {
        this.updateCountdown(); // Llamar recursivamente a la función para actualizar la cuenta cada segundo
      }, 1000);
    }
  }

  clearInterval(): void {
    // Limpiar el intervalo si existe
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

}
