import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonNote,
  IonImg,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';
import { DataService } from '../../services/data.service';
import { Movie } from 'src/app/models/movie.i';
import { getBackdropUrl, getPosterUrl } from 'src/app/util/get-asset-url';
import { MovieDetails } from 'src/app/models/movie-details.i';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-movie.page.html',
  styleUrls: ['./view-movie.page.scss'],
  standalone: true,
  imports: [
    IonFooter,
    IonCol,
    IonRow,
    IonGrid,
    IonButton,
    IonImg,
    CommonModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonContent,
    IonItem,
    IonIcon,
    IonLabel,
    IonNote,
  ],
})
export class ViewMoviePage implements OnInit {
  public movie!: MovieDetails;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    addIcons({ personCircle });
  }

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.movie = await this.data.getMovie(+id);
  }

  getBanner(path: string) {
    return getBackdropUrl(path);
  }

  getPoster(path: string) {
    return getPosterUrl(path);
  }
}
