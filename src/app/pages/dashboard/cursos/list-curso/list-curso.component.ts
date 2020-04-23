import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoService } from '../../../../services/cursoService';
import { Curso } from '../../../../entities/cursos';
import { UserService } from '../../../../services/userService';
import { AuthenticationService } from 'src/app/services/authenticationService';

@Component({
  selector: 'app-curso-list',
  styleUrls: ['./list-curso.component.css'],
  templateUrl: './list-curso.component.html',
  providers: [CursoService]
})
export class CursoListComponent implements OnInit {

  public tituloCurso: string;
  public subTituloCurso: string;
  public cursos: Curso[] = [];
  public infoCursos: Curso[] = [];
  public infoCursos2: Curso;
  public cursosDay: Curso;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private cursoService: CursoService,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.tituloCurso = 'Cursos';
    this.subTituloCurso = 'Listado de Cursos';
  }

  ngOnInit() {
    this.cursoService.getCursos().subscribe(
      result => {
        if (result.status !== 200) {
          console.log('Error al consumir el Servicio CursoService' + result);
        } else {
          // this.productos.push(result.body);
          this.cursos = result.body; // Matriz
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.cursos);
  }

  deleteUser(id) {
    const confirm = window.confirm('¿Esta seguro que desea eliminar este campo? Este Curso podría estar asociado a una carga academica.');
    if (confirm) {
      this.cursoService.getDeleteId(id).subscribe(result => {
        window.alert('El campo seleccionado ha sido eliminado correctamente.');
        this.refresh();
      },
        error => {
          console.error(error.error);
          window.alert(error.error);
        }
      );
    }
  }

  updateCurso(id) {
    this.cursoService.updateCurso(id, this.infoCursos).subscribe(
      result => {
        this.cursosDay = result;
        window.alert('Informacion modificada correctamente.');
        this.refresh();
        console.log(result);
      },
      error => {
        console.log(error.error);
      })
  }

  deleteCurso(id) {
    const confirm = window.confirm('¿Esta seguro que desea eliminar este campo? Esta Materia podría estar asociada a una carga academica.');
    if (confirm) {
      this.cursoService.getDeleteId(id).subscribe(result => {
        console.log(result);
        window.alert('El campo seleccionado ha sido eliminado correctamente.');
        this.refresh();
      },
        error => {
          console.error(error.error);
        }
      );
    }
  }

  refresh() {
    location.reload();
  }


  printDays(dias: number[]): string {
    let diasStr = '';
    dias.forEach((id) => {
      switch (id) {
        case 1:
          diasStr += 'Lunes,';
          break;
        case 2:
          diasStr += '  Martes,';
          break;
        case 3:
          diasStr += '  Miercoles,';
          break;
        case 4:
          diasStr += '  Jueves,';
          break;
        case 5:
          diasStr += '  Viernes,';
          break;
        case 6:
          diasStr += '  Sabado,';
          break;
        default:
          diasStr += '  Domingo,';
          break;
      }
    });
    diasStr = diasStr.substr(0, diasStr.length - 1);
    return diasStr;
  }

  setDay(id: number, item) {

    if (item.currentTarget.checked) {
      this.cursosDay.dias.push(id + 1);
    } else {
      const index = this.cursosDay.dias.indexOf(id + 1);
      if (index > -1)
        this.cursosDay.dias.splice(index, 1);
    }
    console.log(this.cursosDay.dias);
  }

  logout() {
    this.authenticationService.logout();
    this.route.navigate(['/login']);
  }

  agregarCurso() {
    this.route.navigate(['../add-curso']);
  }

  cargaInfo(id) {
    this.cursoService.getCursoId(id).subscribe(
      result => {
        this.infoCursos = result.body;
        console.log(result.body);
      },
      error => {
        console.log(error);
      }
    );
  }

}
