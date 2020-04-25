import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/userService';
import { Users } from '../../entities/user';

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
    private userService: UserService
  ) {
    this.titulo = 'Registro de Usuarios';
    this.usuario = new Users();
  }

  registrar(password: string, rPassword: string) {

    if (password !== rPassword) {
      window.alert('Las contraseñas no coinciden, intente nuevamente.');
      // location.reload();

    } else {
      return this.userService.register(this.usuario).subscribe(
        result => {
          // this.producto.push(result);
          this.usuario = result;
          console.log(result);
          window.alert('Usuario Registrado.');
          this.navigateLogin();
        },
        error => {
          window.alert("El usuario que intenta registrar ya pertenece a este sistema, por favor inicie sesión");
          this.navigateLogin();
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
