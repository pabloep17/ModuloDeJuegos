import { Component } from '@angular/core';
import { updateUser } from 'src/assets/functions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user:any = JSON.parse(localStorage.getItem('user') || '{}')

  nombre:string = this.user.nombre

  cerrarSesion() {
    localStorage.removeItem('user')
    window.location.href = '/inicio';
  }

  updateData(dato:string, valor:string) {
    updateUser(this.user.token, dato, valor).then(e => {
      if (e.code === 200) {
        this.user[dato] = valor
        localStorage.setItem('user', JSON.stringify(this.user))
        window.location.reload()
      }
    })
  }

}
