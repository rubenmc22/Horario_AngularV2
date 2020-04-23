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
  private user: Users[] = [];
  private modificarUsuarios: ModificarUsuario[] = [];

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private modificarUsuarioService: ModificarUsuarioService,
    private userService: UserService,
    private authenticationService: AuthenticationService,

  ) {
    this.titulo = 'Perfil';
    this.subTitulo = 'Modificar Usuario';
    this.modificarUsuario = new ModificarUsuario();

    this.userService.getUsuarios().subscribe(
      result => {
        if (result.status !== 200) {
          console.log('Error al consumir el Servicio CursoService' + result);
        } else {
          // this.productos.push(result.body);
          this.user = result.body; // Matriz
          console.log(result.body);
        }
      },
      error => {
        console.log(error);
      }
    );

  }

  ngOnInit() {
    console.log('Se cargo el componente administracion');
    console.log(this.admin.cedula);
    console.log(this.modificarUsuario.cedula);

  }

  onSubmit() {
  }

  updateUsuario(pass: string, rPass: string, id: number) {
    console.log(pass);
    console.log(rPass);
    console.log(id);

    if (pass !== rPass) {
      window.alert('Las contraseñas no coinciden.')
    } else {

      return this.userService.updateUser(id, this.user).subscribe(
        result => {
          this.admin = result; // Matriz
          console.log(result);
          console.log(this.modificarUsuario.id);
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
