import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfesorService } from '../../../../services/profesorService';
import { Profesor } from '../../../../entities/profesor';
import { UserService } from '../../../../services/userService';

@Component({
  selector: 'app-profesores-add',
  styleUrls: ['./add-profesor.component.css'],
  templateUrl: './add-profesor.component.html',
  providers: [ProfesorService]
})
export class ProfesoresAddComponent implements OnInit {

  public titulo: string;
  public subTitulo: string;
  public profesor: Profesor;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private profesorService: ProfesorService,
    private userService: UserService
  ) {
    this.titulo = 'Profesor';
    this.subTitulo = 'Agregar nuevo Profesor';
    this.profesor = new Profesor('');
  }

  ngOnInit() {
  }

  guardar() {
    return this.profesorService.postProfesor(this.profesor).subscribe(
      result => {
        if (result.correo !== null) {
          this.profesor = result;
          console.log(result);
          window.alert('Información Guardada.');
          this.refresh();
        } else {
          console.log(result);
          console.log('ES NULL: ' + result);
        }

      },
      error => {
        console.log(error.error);
        window.alert(error.error);
      }
    );
  }

  refresh(): void {
    this.route.navigate(['../list-profesores']);
  }

  irAtras() {
    this.route.navigate(['../list-profesores']);
  }

  verProfesor() {
    this.route.navigate(['../list-profesores']);
  }
}
