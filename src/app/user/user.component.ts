import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user:any = JSON.parse(localStorage.getItem('user') || '{}')

  cerrarSesion() {
    localStorage.removeItem('user')
    window.location.href = '/inicio';
  }

}
