import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorarioService } from '../../../services/horarioService';
import { Horario } from '../../../entities/horarios';
import { Curso } from '../../../entities/cursos';
import { CursoService } from '../../../services/cursoService';
import { BloqueHorarios } from '../../../entities/bloqueHorario';
import { BloqueHorarioService } from '../../../services/BloqueHorarioService';
import { AuthenticationService } from 'src/app/services/authenticationService';

@Component({
  selector: 'app-horarios',
  styleUrls: ['./horarios.component.css'],
  templateUrl: './horarios.component.html',
  providers: [HorarioService, BloqueHorarioService]
})

export class HorariosComponent implements OnInit {

  public titulo: string;
  public subTitulo: string;
  public horario: Horario;
  public obtenerHorarios: Horario[] = [];
  public cursos: Curso[] = [];
  public curso: Curso;
  public tipo: string[] = [];
  public bloqueHorario: BloqueHorarios;
  public bloqueDeHorario: BloqueHorarios[] = [];

  constructor(
    private route: Router,
    private horarioService: HorarioService,
    private cursoService: CursoService,
    private bloqueHorarioService: BloqueHorarioService,
    private authenticationService: AuthenticationService

  ) {
    this.titulo = 'Horarios';
    this.subTitulo = 'Procesar Horarios';
    this.horario = new Horario();
    this.curso = new Curso('', '', [], '');

    this.cursoService.getCursos().subscribe(
      result => {
        // this.producto.push(result);
        this.cursos = result.body; // Matriz
        // console.log(this.cursos);
      },
      error => {
        console.log(error);
      }
    );

    /* this.bloqueHorarioService.getBloquesHorario().subscribe(
       result => {
         this.bloqueDeHorario = result.body;
         console.log(result.body);
       },
       error => {
         console.log(error.error);
       }
     );*/

  }

  ngOnInit() {
    console.log('Se cargo el componente Horario');

  }

  obtenerHorario() {
    this.horarioService.getHorario().subscribe(
      result => {
        this.obtenerHorarios = result.body;
        console.log(this.obtenerHorarios);
      },
      error => {
        console.log(error.error);
      }
    );
  }

  obtenerHorarioPorCurso() {
    this.obtenerHorarios = [];
    this.bloqueDeHorario = [];
    this.horarioService.getHorarioPorCurso(this.curso.id).subscribe(
      result => {
        if (result.body.length > 0) {
          this.obtenerHorarios = result.body;
          console.log(this.obtenerHorarios);
          this.obtenerBloqueHorario();
          this.ngOnInit();
        } else {
          window.alert('No se ha generado el horario de este curso');
        }

      },
      error => {
        console.log(error.error);
      }
    );
  }

  generarHorario() {
    console.log(this.horario);

    return this.horarioService.postHorario(this.horario).subscribe(
      result => {
        // this.producto.push(result);
        this.horario = result; // Matriz
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  generarHorarioPorCurso() {
    return this.horarioService.postHorarioPorCurso(this.curso.id).subscribe(
      result => {
        this.horario = result;
        console.log(result);
        window.alert('Se ha generado el horario correctamente.');
        // this.refresh();
        this.ngOnInit();
        this.obtenerHorarioPorCurso();
      },
      error => {
        console.log(error);
      }
    );
  }

  refresh() {
    location.reload();
  }

  obtenerBloqueHorario() {
    this.bloqueDeHorario = [];
    this.bloqueHorarioService.getBloquesHorario().subscribe(
      result => {
        this.bloqueDeHorario = result.body;
        //console.log(BloqueHorarioService);
      },
      error => {
        console.log(error.error);
      }
    );
  }

  hallar(bloqueHorario, dia) {
    let horarioGet = this.obtenerHorarios.find(b => b.bloqueHorario === bloqueHorario
      && b.dia === dia);

    return (horarioGet ? horarioGet.asignatura + ' / ' + horarioGet.docente : "");

  }

  logout() {
    this.authenticationService.logout();
    this.route.navigate(['/login']);
  }




}

