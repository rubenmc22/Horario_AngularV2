import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CargaAcademicaService } from '../../../services/cargaAcademicaService';
import { CargaAcademica } from '../../../entities/cargaAcademica';


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

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private cargaAcademicaService: CargaAcademicaService
  ) {
    this.titulo = 'Curso';
    this.subTitulo = 'Agregar Carga Académica';
  }

  ngOnInit() {
    this.cargaAcademicaService.getCargaAcademica().subscribe(
      result => {
        if (result.status !== 200) {
          console.log('Error al consumir el Servicio CursoService' + result);
        } else {
          // this.productos.push(result.body);
          this.cargaAcademica = result.body; // Matriz
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.cargaAcademica);
  }

  changeView(curso) {
    this.curser = curso;
  }
}
