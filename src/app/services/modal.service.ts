import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Film} from "../../models/film";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisible$ = new BehaviorSubject<boolean>(false)
  clickedFilm = {
    id: 0,
    name: '',
    year: 0,
    description: '',
    genre: [0]
  }

  open(film: Film) {
    this.isVisible$.next(true)
    this.clickedFilm = film
  }

  close(){
    this.isVisible$.next(false)
  }

  constructor() { }
}
