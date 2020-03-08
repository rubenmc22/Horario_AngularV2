import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  styleUrls: ['./component.home.css'],
  templateUrl: './component.home.html',
})
export class HomeComponent implements OnInit {

  public titulo;

  constructor( private route: Router,
               private router: ActivatedRoute) {
    this.titulo = 'Dashboard';
  }
  ngOnInit() {
    console.log('Se cargo el componente (component.home.ts)');
  }

}
