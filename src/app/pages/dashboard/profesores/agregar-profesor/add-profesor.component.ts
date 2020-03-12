import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ProfesorService} from '../../../../services/profesorService';
import {Profesor} from '../../../../entities/profesor';
import {UserService} from '../../../../services/userService';

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
    this.titulo = 'Profesores';
    this.subTitulo = 'Agregar nuevo Profesores';
    this.profesor = new Profesor();
  }

  ngOnInit() {
  }

  onSubmits() {

    return this.profesorService.postProfesor(this.profesor).subscribe(
      result => {
        // this.producto.push(result);
        this.profesor = result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  refresh(): void {
    window.alert('Informacion almacenada');
    location.reload();

  }
}
