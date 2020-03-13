import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HorarioService} from '../../../services/horarioService';
import {Horario} from '../../../entities/horarios';
import {UserService} from '../../../services/userService';
import {Curso} from '../../../entities/cursos';
import {CursoService} from '../../../services/cursoService';


@Component({
  selector: 'app-horarios',
  styleUrls: ['./horarios.component.css'],
  templateUrl: './horarios.component.html',
  providers: [HorarioService]
})
export class HorariosComponent implements OnInit {

  public titulo: string;
  public subTitulo: string;
  public horario: Horario;
  public cursos: Curso[] = [];

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private horarioService: HorarioService,
    private cursoService: CursoService,
    private userService: UserService
  ) {
    this.titulo = 'Horarios';
    this.subTitulo = 'Procesar Horarios';
    this.horario = new Horario('', '', '', '', '', true);

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
  }

  ngOnInit() {
    console.log('Se cargo el componente Horario');
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

}

