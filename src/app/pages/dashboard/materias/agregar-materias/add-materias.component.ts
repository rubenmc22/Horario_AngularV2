import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MateriaService} from '../../../../services/materiaService';
import {Materia} from '../../../../entities/materia';
import {UserService} from '../../../../services/userService';

@Component({
  selector: 'app-materias-add',
  styleUrls: ['./add-materias.component.css'],
  templateUrl: './add-materias.component.html',
  providers: [MateriaService]
})
export class MateriasAddComponent implements OnInit {

  public titulo: string;
  public subTitulo: string;
  public materia: Materia;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private materiaService: MateriaService,
    private userService: UserService,
  ) {
    this.titulo = 'Materias';
    this.subTitulo = 'Listado de Materias';
    this.materia = new Materia('', '', true);
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.materia);

    return this.materiaService.postMateria(this.materia).subscribe(
      result => {
        // this.producto.push(result);
        this.materia = result; // Matriz
      },
      error => {
        console.log(error);
      }
    );

  }

  refresh() {
    location.reload();
  }

  logout() {
    this.userService.logout();
    this.userService.currentUserValue;
  }

}
