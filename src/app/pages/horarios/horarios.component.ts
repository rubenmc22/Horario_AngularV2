import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-horarios',
  styleUrls: ['./horarios.component.css'],
  templateUrl: './horarios.component.html',
  providers: [ProductoService]
})
export class HorariosComponent implements OnInit {

  public titulo: string;
  public subTitulo: string;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
  ) {
    this.titulo = 'Horarios';
    this.subTitulo = 'Procesar Horarios'
  }

  ngOnInit() {
  }
}
