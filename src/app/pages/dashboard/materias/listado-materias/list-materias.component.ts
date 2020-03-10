import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MateriaService} from '../../../../services/materiaService';
import {Materia} from '../../../../entities/materia';

@Component({
  selector: 'app-materias-list',
  styleUrls: ['./list-materias.component.css'],
  templateUrl: './list-materias.component.html',
  providers: [MateriaService]
})
export class MateriasListComponent implements OnInit {

  public titulo: string;
  public subtitulo: string;
  public materia: Materia[] = [];

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private materiaService: MateriaService,
  ) {
    this.titulo = 'Materias';
    this.subtitulo = 'Listado de Materias';
  }

  ngOnInit() {
    console.log('Se cargo el componente Materia List)');

    this.materiaService.getMateria().subscribe(
      result => {
        // this.productos.push(result.body);
        this.materia = result.body; // Matriz
        console.log(result.body);
      },
      error => {
        console.log(error);
      }
    );

  }

  deleteUser(id) {
    this.materiaService.getDeleteId(id).subscribe(result => {
        console.log(result);
      },
      error => {
        console.error(error.error);
      }
    );
  }

  refresh() {
    location.reload();
    window.alert('Informacion eliminada');
  }
}

