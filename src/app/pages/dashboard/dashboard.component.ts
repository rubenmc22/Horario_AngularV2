import {Component, OnInit} from '@angular/core';
import {Users} from '../../entities/user';
import {UserService} from '../../services/userService';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {


  public titulo;

  constructor(
    private userService: UserService
  ) {
    this.titulo = 'Dashboard';

  }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.userService.currentUserValue;
  }

}
