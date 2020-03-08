import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { CursoService } from '../../../services/cursoService';
import { Curso } from '../../../entities/cursos';

@Component({
  selector: 'app-curso-add',
  styleUrls: ['./add-curso.component.css'],
  templateUrl: './add-curso.component.html',
  providers: [CursoService]
})
export class CursoAddComponent implements OnInit {

  public titulo: string;
  public subTitulo: string;
  public cursos: Curso;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private cursoService: CursoService,

  ) {
    this.titulo = 'Curso';
    this.subTitulo = 'Agregar Curso';
    this.cursos = new Curso('', '', [], true);
  }

  ngOnInit() {


  }
  onSubmit() {
    console.log(this.cursos);
    return this.cursoService.postCurso(this.cursos).subscribe(
      result => {
        // this.producto.push(result);
        this.cursos = result; // Matriz
      },
      error => {
        console.log(error);
      }
    );
  }
  recargarPagina() {
    location.reload()
  }





}
