import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  public titulo;

  constructor() {
    this.titulo = 'Dashboard';
  }

  ngOnInit() {
  }

}
