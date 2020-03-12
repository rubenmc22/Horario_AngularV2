import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MateriaService } from '../../../../services/materiaService';
import { Materia } from '../../../../entities/materia';
import { UserService } from '../../../../services/userService';

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
    private userService: UserService,
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
    const result = window.confirm('¿Esta seguro que desea eliminar este campo? Esta Materia podria estar asociada a una carga academica.');
    if (result) {
      this.materiaService.getDeleteId(id).subscribe(result => {
        console.log(result);
        window.alert('Informacion eliminada');
        location.reload();
      },
        error => {
          console.error(error.error);
        }
      );
    }
  }

  logout() {
    this.userService.logout();
    this.userService.currentUserValue;
  }
}

