import { Component } from '@angular/core';
import { getUserSessions, updateUser, cerrarSession } from 'src/util/functions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user:any = JSON.parse(localStorage.getItem('user') || '{}')

  sessions:any

  nombre:string = this.user.nombre

  ngOnInit() {
    getUserSessions(this.user.token).then(r => {
      this.sessions = r
    })
  }

  cerrarSesion() {
    cerrarSession(this.user.token).then(e => {
      if (e.code === 200) {
        localStorage.removeItem('user')
        window.location.href = '/inicio';
      } else {
        window.alert("No se ha podido cerrar sesion")
      }
    })
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
