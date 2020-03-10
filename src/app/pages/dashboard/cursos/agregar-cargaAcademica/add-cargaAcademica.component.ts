import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CargaAcademicaService } from '../../../../services/cargaAcademicaService';
import { CargaAcademica } from '../../../../entities/cargaAcademica';

@Component({
  selector: 'app-cargacademica-add',
  styleUrls: ['./add-cargaAcademica.component.css'],
  templateUrl: './add-cargaAcademica.component.html',
  providers: [CargaAcademicaService]
})
export class CargaAcademicaAddComponent implements OnInit {

  public titulo: string;
  public subTitulo: string;
  public cargaAcademica: CargaAcademica;
  public curser: '';

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private cargaAcademicaService: CargaAcademicaService
  ) {
    this.titulo = 'Carga Academica';
    this, this.subTitulo = 'Agregar Carga Academica';
    this.cargaAcademica = new CargaAcademica('', '', '', 0, true);
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.cargaAcademica);

    return this.cargaAcademicaService.postCargaAcademica(this.cargaAcademica).subscribe(
      result => {
        // this.producto.push(result);
        this.cargaAcademica = result; // Matriz
      },
      error => {
        console.log(error);
      }
    );
  }
  changeView(curso) {
    this.curser = curso;
  }
}
