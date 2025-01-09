import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
    // Проверяем статус авторизации
    this.authService.isAuthenticated().subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  login() {
    this.authService.login().subscribe(() => {
      this.isLoggedIn = true;
    });
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.isLoggedIn = false;
    });
  }
}
