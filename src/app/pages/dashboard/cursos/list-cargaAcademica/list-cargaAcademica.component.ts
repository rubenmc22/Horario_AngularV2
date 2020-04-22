import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CargaAcademicaService } from '../../../../services/cargaAcademicaService';
import { CargaAcademica } from '../../../../entities/cargaAcademica';
import { UserService } from '../../../../services/userService';
import { AuthenticationService } from 'src/app/services/authenticationService';


@Component({
  selector: 'app-cargacademica-list',
  styleUrls: ['./list-cargaAcademica.component.css'],
  templateUrl: './list-cargaAcademica.component.html',
  providers: [CargaAcademicaService]
})
export class CargaAcademicaListComponent implements OnInit {

  public titulo: string;
  public subTitulo: string;
  public curser: '';
  public cargaAcademica: CargaAcademica[] = [];

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private cargaAcademicaService: CargaAcademicaService,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.titulo = 'Carga Académica';
    this.subTitulo = 'Ver Carga Académica';
  }

  ngOnInit() {
    this.cargaAcademicaService.getCargaAcademica().subscribe(
      result => {
        if (result.status !== 200) {
          console.log('Error al consumir el Servicio CursoService' + result);
        } else {
          // this.productos.push(result.body);
          this.cargaAcademica = result.body; // Matriz
          console.log(this.cargaAcademica);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteCarga(id) {
    const confirm = window.confirm('¿Esta seguro que desea eliminar este campo? Esta Materia podría estar asociada a una carga academica.');
    if (confirm) {
      this.cargaAcademicaService.getDeleteId(id).subscribe(result => {
        console.log(result);
        window.alert('El campo seleccionado ha sido eliminado correctamente.');
        location.reload();
      },
        error => {
          console.error(error.error);
        }
      );
    }
  }

  logout() {
    this.authenticationService.logout();
    this.route.navigate(['/login']);
  }

  agregarCargaAcademica() {
    this.route.navigate(['../add-cargaAcademica']);
  }
}
