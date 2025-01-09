import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.isAuthenticated().subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  goHome() {
    this.router.navigate(['']);
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

  goRegister() {
    this.router.navigate(['/register']);
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.isLoggedIn = false;
    });
  }
}
