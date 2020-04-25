import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authenticationService';
import { UserService } from '../../services/userService';
import { Users } from '../../entities/user';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public titulo: string;
  loginForm: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public user: Users[] = [];

  constructor(
    private route: Router,
    //private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    //private loginService: LoginService,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.titulo = 'Login';
    if (this.authenticationService.currentUserValue) {
      this.route.navigate(['/home']);
    }
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '/login';
  }

  logIn(username: string, password: string, event: Event) {

    event.preventDefault(); // Avoid default action for the submit button of the login form
    this.authenticationService.login(username, password).subscribe(
      result => {
        this.user = result;
        alert('Bienvenido al Sistema Generador de Horarios');
        this.navigate();
      },
      error => {
        alert(error.error);
      }
    );

  }

  navigate() {
    this.route.navigate(['../home']);
  }
  navigateRegistro() {
    this.route.navigate(['../registro-user']);
  }

}
