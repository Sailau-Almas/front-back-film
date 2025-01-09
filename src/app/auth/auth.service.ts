import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    const user = localStorage.getItem('user');
    if (user) {
      this.isAuthenticatedSubject.next(true);
    }
  }

  register(email: string, password: string): Observable<void> {
    return new Observable(observer => {
      if (email && password) {
        localStorage.setItem('user', JSON.stringify({ email, password }));
        this.isAuthenticatedSubject.next(true);
        observer.next();
        observer.complete();
      } else {
        observer.error('Registration failed');
      }
    });
  }

  login(email: string, password: string): Observable<void> {
    return new Observable(observer => {
      const user = localStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        if (userData.email === email && userData.password === password) {
          this.isAuthenticatedSubject.next(true);
          observer.next();
          observer.complete();
        } else {
          observer.error('Invalid credentials');
        }
      } else {
        observer.error('No user found');
      }
    });
  }

  logout(): Observable<void> {
    return new Observable(observer => {
      localStorage.removeItem('user');
      this.isAuthenticatedSubject.next(false);
      observer.next();
      observer.complete();
    });
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
}
