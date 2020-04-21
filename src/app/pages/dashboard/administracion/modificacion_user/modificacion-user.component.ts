import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModificarUsuarioService } from '../../../../services/modificarUserService';
import { ModificarUsuario } from '../../../../entities/modificarUser';
import { LoginService } from '../../../../services/loginService';
import { Users } from '../../../../entities/user';
import { UserService } from '../../../../services/userService';

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
  private admin = new Users('', '');

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private modificarUsuarioService: ModificarUsuarioService,
    private adminService: LoginService,
    private userService: UserService,

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


  /*form = new FormGroup({
    usuario: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required),
    rPass: new FormControl('', Validators.required),
  });

  registroForm = new FormGroup({
    pass: this.pass,
    rPass: this.rPass
  })

  adminForm(formModificarUser) {
    let pass = this.form.pass.value;
    let rPass = this.rPass;
  }*/


  logout() {
    this.userService.logout();
    this.userService.currentUserValue;
  }




}
