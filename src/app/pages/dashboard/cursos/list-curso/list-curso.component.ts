import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoService } from '../../../../services/cursoService';
import { Curso } from '../../../../entities/cursos';
import {UserService} from '../../../../services/userService';

@Component({
  selector: 'app-curso-list',
  styleUrls: ['./list-curso.component.css'],
  templateUrl: './list-curso.component.html',
  providers: [CursoService]
})
export class CursoListComponent implements OnInit {

  public titulo: string;
  public subTitulo: string;
  public cursos: Curso[] = [];

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private cursoService: CursoService,
    private userService: UserService
  ) {
    this.titulo = 'Curso';
    this.subTitulo = 'Listado de Cursos';
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
    this.cursoService.getDeleteId(id).subscribe(result => {

      },
      error => {
        console.error(error.error);
        window.alert(error.error);
      }
    );
  }

}
