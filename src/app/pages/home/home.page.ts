import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  RefresherCustomEvent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRefresher,
  IonRefresherContent,
  IonList,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonFooter,
  IonFabButton,
  IonFab,
  IonIcon,
} from '@ionic/angular/standalone';
import { MovieComponent } from '../../components/movie/movie.component';

import { DataService } from '../../services/data.service';
import { Genre } from 'src/app/models/genre.i';
import { Movie } from 'src/app/models/movie.i';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonFab,
    IonFabButton,
    IonFooter,
    IonButton,
    IonCol,
    IonRow,
    IonGrid,
    IonSearchbar,
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRefresher,
    IonRefresherContent,
    IonList,
    MovieComponent,
  ],
})
export class HomePage implements OnInit {
  private data = inject(DataService);

  public selectedGenreId?: number = undefined;

  constructor() {}

  async ngOnInit() {
    try {
      await this.data.getGenres();
      await this.data.getInitialMovies();
    } catch (error) {
      console.error('Home page error!', error);
      throw error;
    }
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMovieList(): Movie[] {
    return this.data.movieList;
  }

  getGenreList(): Genre[] {
    return this.data.genreList;
  }

  selectGenre(id: number) {
    this.selectedGenreId = this.selectedGenreId === id ? undefined : id;
    this.data.getInitialMovies(this.selectedGenreId);
  }

  loadMoreMovies() {
    this.data.getMoreMovies(this.selectedGenreId);
  }
}
