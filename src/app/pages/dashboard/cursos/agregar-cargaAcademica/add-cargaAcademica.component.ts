import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CargaAcademicaService } from '../../../../services/cargaAcademicaService';
import { CursoService } from '../../../../services/cursoService';
import { ProfesorService } from '../../../../services/profesorService';
import { MateriaService } from '../../../../services/materiaService';
import { Curso } from '../../../../entities/cursos';
import { Profesor } from '../../../../entities/profesor';
import { CargaAcademica } from '../../../../entities/cargaAcademica';
import { Materia } from '../../../../entities/materia';
import { AuthenticationService } from 'src/app/services/authenticationService';

@Component({
  selector: 'app-cargacademica-add',
  styleUrls: ['./add-cargaAcademica.component.css'],
  templateUrl: './add-cargaAcademica.component.html',
  providers: [CargaAcademicaService]
})
export class CargaAcademicaAddComponent implements OnInit {

  public titulo: string;
  public subTitulo: string;
  public cargaAcademica: CargaAcademica;
  public profesores: Profesor[] = [];
  public docente: Profesor = new Profesor('');
  public cursos: Curso[] = [];
  public materias: Materia[] = [];

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private cargaAcademicaService: CargaAcademicaService,
    private cursoService: CursoService,
    private profesorService: ProfesorService,
    private materiaService: MateriaService,
    private authenticationService: AuthenticationService

  ) {
    this.titulo = 'Carga Academica';
    this.subTitulo = 'Agregar Carga Academica';
    this.cargaAcademica = new CargaAcademica(0, '', 0, '', 0, '', 1, '');

    this.cursoService.getCursos().subscribe(
      result => {
        // this.producto.push(result);
        this.cursos = result.body; // Matriz
        console.log(this.cursos);
      },
      error => {
        console.log(error);
      }
    );

    this.profesorService.getProfesores().subscribe(
      result => {
        this.profesores = result.body;
        console.log(this.profesores);
      },
      error => {
        console.log(error);
      }
    );

    this.materiaService.getMateria().subscribe(
      result => {
        this.materias = result.body;
      },
      error => {
        console.log(error);
      }
    );

  }

  ngOnInit() {
  }

  onSubmit() {
    return this.cargaAcademicaService.postCargaAcademica(this.cargaAcademica).subscribe(
      result => {
        this.cargaAcademica = result;
        console.log(this.cargaAcademica)
      },
      error => {
        console.log(error);
        window.alert(error.error);
      }
    );
  }

  refresh() {
    location.reload();
  }

  apellido(profesor) {
    this.docente = this.profesores[profesor];
  }

  irAtras() {
    this.route.navigate(['../list-cargaAcademica']);
  }

  logout() {
    this.authenticationService.logout();
    this.route.navigate(['/login']);
  }

}
