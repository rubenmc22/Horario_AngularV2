import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: ['./menu.component.css'],
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  public titulo;

  constructor() {
    this.titulo = 'Dashboard';
  }

  ngOnInit() {
  }

}
