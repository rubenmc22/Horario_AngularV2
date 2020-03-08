import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public titulo: string;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
  ) {
    this.titulo = 'Login';
  }

  ngOnInit() {
  }
}
