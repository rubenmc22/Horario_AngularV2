import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MateriaService } from '../../../../services/materiaService';
import { Materia } from '../../../../entities/materia';
import { UserService } from '../../../../services/userService';
import { AuthenticationService } from 'src/app/services/authenticationService';

@Component({
  selector: 'app-materias-list',
  styleUrls: ['./list-materias.component.css'],
  templateUrl: './list-materias.component.html',
  providers: [MateriaService]
})
export class MateriasListComponent implements OnInit {

  public titulo: string;
  public subTitulo: string;
  public materia: Materia[] = [];
  public infoMateria: Materia[] = [];
  public materias: Materia;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private materiaService: MateriaService,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.titulo = 'Materias';
    this.subTitulo = 'Listado de Materias';
    this.materias = new Materia('', '', '');
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

  updateMateria(id) {
    this.materiaService.updateMateria(id, this.infoMateria).subscribe(
      result => {
        this.materias = result;
        console.log(result);
        window.alert('Informacion modificada correctamente.');
      },
      error => {
        console.log(error.error);
      })
  }

  deleteMateria(id) {
    const confirm = window.confirm('¿Esta seguro que desea eliminar este campo? Esta Materia podría estar asociada a una carga academica.');
    if (confirm) {
      this.materiaService.getDeleteId(id).subscribe(result => {
        console.log(result);
        window.alert('El campo seleccionado ha sido eliminado correctamente.');
        this.refresh();
      },
        error => {
          console.error(error.error);
        }
      );
    }
  }

  refresh() {
    location.reload();
  }

  logout() {
    this.authenticationService.logout();
    this.route.navigate(['/login']);
  }

  agregarMateria() {
    this.route.navigate(['../add-materia']);
  }

  cargaInfo(id) {
    this.materiaService.getMateriaId(id).subscribe(
      result => {
        this.infoMateria = result.body;
        console.log(result.body);
      },
      error => {
        console.log(error);
      }
    );

  }


}

