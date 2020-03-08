import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-administracion',
  styleUrls: ['./modificacion-user.component.css'],
  templateUrl: './modificacion-user.component.html',
})
export class ModificacionUserComponent implements OnInit {

  public titulo: string;
  public subTitulo: string;

  constructor(private route: Router,
    private router: ActivatedRoute) {
    this.titulo = 'Administración';
    this.subTitulo = 'Modificar Usuario de Login '
  }

  ngOnInit() {
    console.log('Se cargo el componente administracion');
  }

}
