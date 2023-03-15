import {Component} from '@angular/core';
import {Film} from "../models/film";
import {films} from "./stub/filmsData"
import {genreList} from "./stub/genreList";
import {ModalService} from "./services/modal.service";
import {emptyFilm} from "./stub/images/emptyFilm";
import {BehaviorSubject} from "rxjs";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  resetSearch = 'resetSearch'
  title = 'Популярные фильмы'
  filmName = ''
  selectedGenreId = ''
  films: Film[] = films
  sortedFilms: Film[] = films
  genreList = genreList
  isLikedFilm$ = new BehaviorSubject<boolean>(true)

  getSelectedGenreID = (genreName: string) => {
    const genreFromList = genreList.find(el => el.genre === genreName)
    return genreFromList?.id
  }

  getLikedFilm = () => {
    const likedFilm = localStorage.getItem('likedFilm')
    if (!likedFilm) {
      this.isLikedFilm$.next(false)
      return emptyFilm
    }
    const chosenFilm = films.find(film => film.id.toString() === likedFilm)
    if (!chosenFilm) {
      this.isLikedFilm$.next(false)
      return emptyFilm
    } else {
      this.isLikedFilm$.next(true)
      return chosenFilm
    }
  }

  onSelect = ($event: MatSelectChange) => {
    if ($event.value === this.resetSearch) {
      this.sortedFilms = this.films
      return
    }
    this.sortedFilms = this.films.filter(film => film.genre.find(genre => genre.toString() === $event.value))
  }

  constructor(public modalService: ModalService) {
  }
}

