import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from '../../services/loginService';
import { UserService } from '../../services/userService';
import { Users } from '../../entities/user';


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
  }

  logIn(user: string, pass: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    this.loginService.login(user, pass).subscribe(
      result => {
        console.log(result);
        alert('Ingreso Correcto..');
        this.navigate();
      },
      error => {
        console.log(error);
        alert(error.error);
        location.reload();
      }
    );

  }

  navigate() {
    this.route.navigate(['../dashboard']);
  }

}
