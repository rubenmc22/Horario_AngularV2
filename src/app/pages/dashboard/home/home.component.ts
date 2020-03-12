import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/userService';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public titulo;

  constructor(private userService:UserService) {
    this.titulo = 'Principal';
  }

  ngOnInit() {
  }

}
