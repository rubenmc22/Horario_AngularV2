import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MateriaService } from '../../../../services/materiaService';
import { Materia } from '../../../../entities/materia';
import { AuthenticationService } from 'src/app/services/authenticationService';

@Component({
  selector: 'app-materias-add',
  styleUrls: ['./add-materias.component.css'],
  templateUrl: './add-materias.component.html',
  providers: [MateriaService]
})
export class MateriasAddComponent implements OnInit {

  public titulop: string;
  public subTitulo: string;
  public materia: Materia;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private materiaService: MateriaService,
    private authenticationService: AuthenticationService
  ) {
    this.titulop = 'Materias';
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
        window.alert('Informacion Guardada.');
        console.log(result);
        this.refresh();
      },
      error => {
        console.log(error.error);
      }
    );

  }

  refresh() {
    this.route.navigate(['../list-materias']);
  }
  irAtras() {
    this.route.navigate(['../list-materias']);
  }

  logout() {
    this.authenticationService.logout();
    this.route.navigate(['/login']);
  }

}


