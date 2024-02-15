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
  username: string = '';
  password: string = '';

  code:string = '';

  // URL de tu API
  url: string = 'http://app.pabloeguilaz.es/login.php';

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
    loginUser(this.username, this.password)
      .then((response) => {
        
      })
      .catch((error) => {
        console.error(error);
      });
  }      
}
