import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoService } from '../../../../services/cursoService';
import { Curso } from '../../../../entities/cursos';
import { AuthenticationService } from 'src/app/services/authenticationService';

@Component({
  selector: 'app-curso-add',
  styleUrls: ['./add-curso.component.css'],
  templateUrl: './add-curso.component.html',
  providers: [CursoService]
})
export class CursoAddComponent implements OnInit {

  public tituloCurso: string;
  public subTituloCurso: string;
  public cursos: Curso;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private cursoService: CursoService,
    private authenticationService: AuthenticationService
  ) {
    this.tituloCurso = 'Curso';
    this.subTituloCurso = 'Agregar Curso';
    this.cursos = new Curso('', '', [], '');
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.cursos);
    return this.cursoService.postCurso(this.cursos).subscribe(
      result => {
        this.cursos = result;
        console.log(this.cursos);
        window.alert('Informacion Almacenada.');
        this.irAtras();
      },
      error => {
        console.log(error);
        console.log(error.error);
      }
    );
  }

  setDay(id: number, item) {

    if (item.currentTarget.checked) {
      this.cursos.dias.push(id + 1);
    } else {
      const index = this.cursos.dias.indexOf(id + 1);
      if (index > -1)
        this.cursos.dias.splice(index, 1);
    }
    console.log(this.cursos.dias);
  }

  refresh() {
    location.reload();
  }

  irAtras() {
    this.route.navigate(['../list-cursos']);
  }

  logout() {
    this.authenticationService.logout();
    this.route.navigate(['/login']);
  }
}
