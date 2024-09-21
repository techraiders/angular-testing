import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor (private authService: AuthService, private router: Router) {}

  ngOnInit () {
    this.getUsers();
  }

  login () {
    this.authService.login();
    this.router.navigate(['/books']);
  }

  logout () {
    this.authService.logout();
  }

  getUsers () {
    this.authService.getUsers().subscribe((users) => {
    });
  }
}
