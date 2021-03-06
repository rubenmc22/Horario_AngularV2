import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfesorService } from '../../../../services/profesorService';
import { Profesor } from '../../../../entities/profesor';
import { UserService } from '../../../../services/userService';
import { AuthenticationService } from 'src/app/services/authenticationService';

@Component({
  selector: 'app-profesores-list',
  styleUrls: ['./list-profesores.component.css'],
  templateUrl: './list-profesores.component.html',
  providers: [ProfesorService]
})
export class ProfesoresListComponent implements OnInit {

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private profesorService: ProfesorService,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.titulo = 'Profesores';
    this.subTitulo = 'Listado de Profesores';
  }

  public titulo: string;
  public subTitulo: string;
  public profesor: Profesor[] = [];
  public infoProfesor: Profesor[] = [];
  public profesores = new Profesor('');

  ngOnInit() {
    console.log('Se cargo el componente Profesores list');

    this.profesorService.getProfesores().subscribe(
      result => {
        if (result.status !== 200) {
          console.log('Error al consumir el Servicio' + result);
        } else {
          // this.profesor.push(result.body);
          this.profesor = result.body; // Matriz
          console.log(result.body);
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.profesor);
  }

  deleteUser(id) {
    const result = window.confirm('¿Esta seguro que desea eliminar este campo? Este Profesor podria estar asociado a una carga academica.');
    if (result) {
      this.profesorService.getDeleteId(id).subscribe(result => {
        window.alert('Registro Eliminado');
        this.ngOnInit();
      },
        error => {
          console.error(error.error);
          window.alert(error.error);
        }
      );
    }
  }

  updateProfesor(id) {
    this.profesorService.updateProfesor(id, this.infoProfesor).subscribe(
      result => {
        this.profesores = result;
        console.log(result);
        window.alert('Informacion modificada correctamente.');
        this.ngOnInit();
      },
      error => {
        console.log(error.error);
      })
  }

  cargaInfo(id) {
    this.profesorService.getProfesorId(id).subscribe(
      result => {
        this.infoProfesor = result.body;
        console.log(result.body);
      },
      error => {
        console.log(error);
      }
    );

  }

  refresh() {
    location.reload();
  }

  logout() {
    this.authenticationService.logout();
    this.route.navigate(['/login']);
  }

  agregarProfesor() {
    this.route.navigate(['../add-profesor']);

  }
} 