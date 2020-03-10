import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HorarioService } from '../../../services/horarioService';
import { Horario } from '../../../entities/horarios';


@Component({
  selector: 'app-horarios',
  styleUrls: ['./horarios.component.css'],
  templateUrl: './horarios.component.html',
  providers: [HorarioService]
})
export class HorariosComponent implements OnInit {

  public titulo: string;
  public subTitulo: string;
  public horario: Horario[] = [];

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private horarioService: HorarioService
  ) {
    this.titulo = 'Horarios';
    this.subTitulo = 'Procesar Horarios'
  }

  ngOnInit() {
    console.log('Se cargo el componente Horario');

  }

  generarHorario() {
    this.horarioService.getHorario().subscribe(
      result => {
        if (result.status !== 200) {
          console.log('Error al consumir el Servicio' + result);
        } else {
          // this.profesor.push(result.body);
          this.horario = result.body; // Matriz
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.horario);
  }
}

