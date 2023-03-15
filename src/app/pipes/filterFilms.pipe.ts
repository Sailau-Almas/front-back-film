import { Pipe, PipeTransform } from '@angular/core';
import {Film} from "../../models/film";

@Pipe({
  name: 'filterFilms'
})
export class FilterFilmsPipe implements PipeTransform {

  transform(films: Film[],  search: string): Film[] {
    return films.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
  }
}
