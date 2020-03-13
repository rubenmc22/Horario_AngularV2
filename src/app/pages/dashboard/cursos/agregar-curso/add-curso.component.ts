import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import {CursoService} from '../../../../services/cursoService';

import {Curso} from '../../../../entities/cursos';
import {UserService} from '../../../../services/userService';

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
    private userService: UserService
  ) {
    this.tituloCurso = 'Curso';
    this.subTituloCurso = 'Agregar Curso';
    this.cursos = new Curso('', '', ['', '', '', '', '', '', ''], true);
  }


  ngOnInit() {
  }

  onSubmit() {
    console.log(this.cursos);
    return this.cursoService.postCurso(this.cursos).subscribe(
      result => {
        // this.producto.push(result);
        this.cursos = result; // Matriz
        console.log(this.cursos);
        window.alert('Informacion Almacenada.');
        this.refresh();
      },
      error => {
        console.log(error);
        console.log(error.error);
      }
    );
  }

  refresh() {
    location.reload();
  }
}
