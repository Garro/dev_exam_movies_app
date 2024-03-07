import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  Platform,
  IonItem,
  IonLabel,
  IonNote,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { star, starOutline, bookmark, bookmarkOutline } from 'ionicons/icons';
import { AssetsUrl, PosterSize } from 'src/app/data/assets_url';
import { Movie } from 'src/app/models/movie.i';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonButton,
    IonCol,
    IonRow,
    IonGrid,
    CommonModule,
    RouterLink,
    IonItem,
    IonLabel,
    IonNote,
    IonIcon,
  ],
})
export class MovieComponent {
  private platform = inject(Platform);

  @Input() movie?: Movie;

  isIos() {
    return this.platform.is('ios');
  }

  constructor() {
    addIcons({ star, bookmark });
  }

  getImage(id: string): string {
    return `${AssetsUrl.BASE_URL}/${PosterSize.w154}${id}`;
  }
}
