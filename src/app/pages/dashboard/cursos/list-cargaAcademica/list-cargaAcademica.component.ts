import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CargaAcademicaService } from '../../../../services/cargaAcademicaService';
import { CargaAcademica } from '../../../../entities/cargaAcademica';
import { UserService } from '../../../../services/userService';


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
    private cargaAcademicaService: CargaAcademicaService,
    private userService: UserService
  ) {
    this.titulo = 'Carga Académica';
    this.subTitulo = 'Ver Carga Académica';
  }

  ngOnInit() {
    this.cargaAcademicaService.getCargaAcademica().subscribe(
      result => {
        if (result.status !== 200) {
          console.log('Error al consumir el Servicio CursoService' + result);
        } else {
          // this.productos.push(result.body);
          this.cargaAcademica = result.body; // Matriz
          console.log(this.cargaAcademica);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteUser(id) {
    this.cargaAcademicaService.getDeleteId(id).subscribe(result => {

    },
      error => {
        console.error(error.error);
        window.alert(error.error);
      }
    );
  }

}
