import {Component, Input} from '@angular/core';
import {Film} from "../../../models/film";
import {ModalService} from "../../services/modal.service";
import {genreList} from "../../stub/genreList";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent {
  @Input() film: Film
  @Input() films: Film[]
  @Input() isLikedFilm$: BehaviorSubject<boolean>

  genreList = genreList

  likedFilm = localStorage.getItem('likedFilm')

  isLiked = (film: Film) => {
    return this.likedFilm === film.id.toString()
  }
  getFilmGenres = (film: Film) => {
    const sortedFilmGenres = film.genre.map((genreNumber) => genreList.filter(el => Number(el.id) === genreNumber))
    return sortedFilmGenres.flat(1).map(el => el.genre).join(', ')
  }

  likeDislikeHandler = (film: Film) => {
    if (!this.likedFilm || this.likedFilm !== film.id.toString()) {
      localStorage.setItem('likedFilm', `${film.id}`)
      this.isLikedFilm$.next(true)
    } else {
      localStorage.setItem('likedFilm', '')
      this.isLikedFilm$.next(false)
    }
    this.modalService.close()
  }

  constructor(public modalService: ModalService) {
  }
}
