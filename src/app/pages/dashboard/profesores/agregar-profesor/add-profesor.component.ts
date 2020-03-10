import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ProfesorService} from '../../../../services/profesorService';
import {Profesor} from '../../../../entities/profesor';

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
    private profesorService: ProfesorService
  ) {
    this.titulo = 'Profesores';
    this.subTitulo = 'Agregar nuevo Profesores';
    this.profesor = new Profesor();
  }

  ngOnInit() {
  }

  onSubmits() {
    console.log(this.profesor);

    return this.profesorService.postProfesor(this.profesor).subscribe(
      result => {
        // this.producto.push(result);
        this.profesor = result;
        console.log(result); // Matriz
      },
      error => {
        console.log(error);
      }
    );
  }
  refresh() {
    window.alert('Informacion almacenada')
    location.reload();;
  }
}
