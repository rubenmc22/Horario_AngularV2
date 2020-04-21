import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MateriaService } from '../../../../services/materiaService';
import { Materia } from '../../../../entities/materia';
import { UserService } from '../../../../services/userService';

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
    private userService: UserService,
  ) {
    this.titulop = 'Materias';
    this.subTitulo = 'Listado de Materias';
    this.materia = new Materia('', '', true);



  }


  ngOnInit() {
    let arr = [{
      name: 'jon', year: 1990
    },
    { name: 'samuel', year: 1996 },
    { name: 'josue', year: 1980 },
    { name: 'grecia', year: 1970 },
    { name: 'victoria', year: 1940 }
    ]
    arr.sort((a, b) => {
      console.log(arr);


      var Resultado = a.year - b.year;
      console.log('Resultado: ' + Resultado);
      return Resultado;
    }
    )

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
    this.userService.logout();
    this.userService.currentUserValue;
  }

}


