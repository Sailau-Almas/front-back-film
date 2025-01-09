import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FilmComponent } from "./components/film/film.component";
import { FormsModule } from "@angular/forms";
import { FilterFilmsPipe } from './pipes/filterFilms.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { ModalComponent } from './components/modal/modal.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilterFilmsPipe,
    ModalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    AppRoutingModule // Добавили сюда
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
