import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {LoginService} from '../../services/loginService';
import {UserService} from '../../services/userService';
import {Users} from '../../entities/user';


@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public titulo: string;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private loginService: LoginService,
    private userService: UserService
  ) {
    this.titulo = 'Login';
  }

  ngOnInit() {
    /*  this.loginService.login(24367965, '1456932').subscribe(
        res => {
          console.log('PRUEBA LOGIN' + res);
        });*/
  }

  logIn(user: string, pass: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.login(user, pass).subscribe(
      res => {
        console.log(res);
        window.alert('You have been successfully registered!');
        const valor: Users = {user, pass};
        this.userService.setUserLoggedIn(valor);

      },
      error => {
        console.error(error);
        window.alert(JSON.stringify(error.error));
      },

      () => this.navigate()
    );

    if (this.loginService.login(user, pass)) {
      this.navigate();
    }

  }

  navigate() {
    this.route.navigate(['dashboard']);
  }


}
