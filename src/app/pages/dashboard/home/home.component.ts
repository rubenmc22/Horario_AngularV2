import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/userService';
import { AuthenticationService } from '../../../services/authenticationService';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../../../entities/user';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public titulo;
  public currentUser: Users;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private route: Router
  ) {
    this.titulo = 'Principal';
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.route.navigate(['/login']);
  }

}
