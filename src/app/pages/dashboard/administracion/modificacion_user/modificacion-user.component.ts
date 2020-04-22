import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModificarUsuarioService } from '../../../../services/modificarUserService';
import { ModificarUsuario } from '../../../../entities/modificarUser';
import { Users } from '../../../../entities/user';
import { UserService } from '../../../../services/userService';
import { AuthenticationService } from 'src/app/services/authenticationService';

@Component({
  selector: 'app-administracion',
  styleUrls: ['./modificacion-user.component.css'],
  templateUrl: './modificacion-user.component.html',
  providers: [ModificarUsuarioService]
})
export class ModificacionUserComponent implements OnInit {

  public titulo: string;
  public subTitulo: string;
  public modificarUsuario: ModificarUsuario;
  private admin = new Users();

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private modificarUsuarioService: ModificarUsuarioService,
    private userService: UserService,
    private authenticationService: AuthenticationService

  ) {
    this.titulo = 'Administración';
    this.subTitulo = 'Modificar Usuario de Login';
    this.modificarUsuario = new ModificarUsuario('', '', '', '', true);
  }

  ngOnInit() {
    console.log('Se cargo el componente administracion');
  }

  onSubmit() {
  }

  updateModifUser(pass: string, rPass: string, usuario: string) {
    console.log(pass);
    console.log(rPass);
    console.log(usuario);

    if (pass !== rPass) {
      window.alert('Las contraseñas no coinciden.')
    } else {

      return this.modificarUsuarioService.updateUser(this.modificarUsuario, usuario).subscribe(
        result => {
          this.modificarUsuario = result; // Matriz
          console.log(result);
        },
        error => {
          console.log(error);
        })
    }
  }

  logout() {
    this.authenticationService.logout();
    this.route.navigate(['/login']);
  }
}
