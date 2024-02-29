import { Component } from '@angular/core';
import { getGitHubUser, loginUser } from 'src/util/functions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Datos del formulario 
  email: string = '';
  password: string = '';

  code:string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.code = params['code'];
      if (this.code) {
        getGitHubUser(this.code).then((response) => {
          if (response.id) {
            localStorage.setItem('user', JSON.stringify(response))
            window.location.href = '/inicio';
          }
        })
      }
    });
  }

  login(): void {
    loginUser(this.email, this.password)
      .then((response) => {
        if (response.token) {
          localStorage.setItem('user', JSON.stringify(response))
          window.location.href = '/inicio';
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }      
}
