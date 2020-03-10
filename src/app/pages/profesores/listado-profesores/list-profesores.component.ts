import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfesorService } from '../../../services/profesorService';
import { Profesor } from '../../../entities/profesor';

@Component({
  selector: 'app-profesores-list',
  styleUrls: ['./list-profesores.component.css'],
  templateUrl: './list-profesores.component.html',
  providers: [ProfesorService]
})
export class ProfesoresListComponent implements OnInit {

  public titulo: string;
  public subTitulo: string;
  public profesor: Profesor[] = [];

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private profesorService: ProfesorService
  ) {
    this.titulo = 'Profesores';
    this.subTitulo = 'Listado de Profesores';
  }
  ngOnInit() {
    console.log('Se cargo el componente Profesores list');

    this.profesorService.getProfesores().subscribe(
      result => {
        if (result.status !== 200) {
          console.log('Error al consumir el Servicio' + result);
        } else {
          // this.profesor.push(result.body);
          this.profesor = result.body; // Matriz
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.profesor);
  }
}

