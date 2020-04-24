import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CargaAcademicaService } from '../../../../services/cargaAcademicaService';
import { CargaAcademica } from '../../../../entities/cargaAcademica';
import { UserService } from '../../../../services/userService';
import { AuthenticationService } from 'src/app/services/authenticationService';
import { Curso } from 'src/app/entities/cursos';
import { CursoService } from '../../../../services/cursoService';
import { ProfesorService } from '../../../../services/profesorService';
import { MateriaService } from '../../../../services/materiaService';
import { Profesor } from '../../../../entities/profesor';
import { Materia } from '../../../../entities/materia';



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
  public cargaAcademicas: CargaAcademica;
  public cursos: Curso[] = [];
  public curso: Curso;
  public profesores: Profesor[] = [];
  public docente: Profesor = new Profesor('');
  public materias: Materia[] = [];
  public infoCargaAcademica: CargaAcademica[] = [];

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private cargaAcademicaService: CargaAcademicaService,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private cursoService: CursoService,
    private profesorService: ProfesorService,
    private materiaService: MateriaService
  ) {
    this.titulo = 'Carga Académica';
    this.subTitulo = 'Materias';
    this.cargaAcademicas = new CargaAcademica(0, '', 0, '', 0, '', 0, '');
    this.curso = new Curso('', '', [], '');


  }

  ngOnInit() {
    this.cursoService.getCursos().subscribe(
      result => {
        this.cursos = result.body;
        console.log(this.cursos);
      },
      error => {
        console.log(error);
      });

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

  obtenerCargaPorCurso() {
    this.cargaAcademica = [];
    this.cargaAcademicaService.getCargaPorCurso(this.curso.id).subscribe(
      result => {
        this.cargaAcademica = result.body;
        console.log(this.cargaAcademica);
        //this.obtenerBloqueHorario();
        this.ngOnInit();
      },
      error => {
        console.log(error.error);
      }
    );
  }

  deleteCarga(id) {
    const confirm = window.confirm('¿Esta seguro que desea eliminar este campo? Esta Materia podría estar asociada a una carga academica.');
    if (confirm) {
      this.cargaAcademicaService.getDeleteId(id).subscribe(result => {
        console.log(result);
        window.alert('El campo seleccionado ha sido eliminado correctamente.');
        this.ngOnInit();
      },
        error => {
          console.error(error.error);
        }
      );
    }
  }

  updateCarga(id) {
    console.log(id);
    this.cargaAcademicaService.updateCargaAcademica(id, this.infoCargaAcademica).subscribe(
      result => {
        this.cargaAcademicas = result;
        console.log(result);
        window.alert('Informacion modificada correctamente.');
        this.ngOnInit();
      },
      error => {
        console.log(error.error);
      })
  }

  logout() {
    this.authenticationService.logout();
    this.route.navigate(['/login']);
  }

  agregarCargaAcademica() {
    this.route.navigate(['../add-cargaAcademica']);
  }

  cargaInfo(id) {
    this.cargaAcademicaService.getCargaAcademicaId(id).subscribe(
      result => {
        this.infoCargaAcademica = result.body;
        console.log(result.body);
      },
      error => {
        console.log(error);
      }
    );

  }
}
