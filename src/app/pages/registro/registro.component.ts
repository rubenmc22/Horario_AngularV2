import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from '../../services/loginService';
import { UserService } from '../../services/userService';
import { Users } from '../../entities/user';
import { format } from 'url';


@Component({
  selector: 'app-registro',
  styleUrls: ['./registro.component.css'],
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {

  public titulo: string;
  public usuario: Users;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private loginService: LoginService,
    private userService: UserService
  ) {
    this.titulo = 'Registro de Usuarios';
    this.usuario = new Users('', '');
  }

  onSubmits(password: string, rPassword: string) {

    if (password !== rPassword) {
      window.alert('Las contraseñas no coinciden, intente nuevamente.');
      // location.reload();

    } else {
      return this.userService.postUser(this.usuario).subscribe(
        result => {
          // this.producto.push(result);
          this.usuario = result;
          window.alert('Usuario Registrado.');
          this.route.navigate(['../login']);
        },
        error => {
          console.log(error);
          window.alert(error.error);
        }

      );
    }
  }
  ngOnInit() {
  }
  navigateLogin() {
    this.route.navigate(['../login']);
  }




}
