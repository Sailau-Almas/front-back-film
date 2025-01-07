import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    // Проверяем в localStorage, если есть данные о пользователе, считаем его авторизованным
    const user = localStorage.getItem('user');
    if (user) {
      this.isAuthenticatedSubject.next(true);
    }
  }

  // Метод для входа
  login(): Observable<void> {
    return new Observable(observer => {
      localStorage.setItem('user', 'loggedIn');
      this.isAuthenticatedSubject.next(true);
      observer.next();
      observer.complete();
    });
  }

  // Метод для выхода
  logout(): Observable<void> {
    return new Observable(observer => {
      localStorage.removeItem('user');
      this.isAuthenticatedSubject.next(false);
      observer.next();
      observer.complete();
    });
  }

  // Метод для проверки, авторизован ли пользователь
  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
}
