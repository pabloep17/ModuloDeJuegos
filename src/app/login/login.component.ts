import { Component } from '@angular/core';
import { getGitHubUser, loginUser } from 'src/assets/functions';
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
        /*getGitHubUser(this.code).then((response) => {
          console.log(response);
        })*/
      }
    });
  }

  login(): void {
    loginUser(this.email, this.password)
      .then((response) => {
        console.log(response);
        //localStorage.setItem('user', JSON.stringify(response))
        //window.location.href = '/inicio';
      })
      .catch((error) => {
        console.error(error);
      });
  }      
}
