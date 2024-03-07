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
import { star, bookmark } from 'ionicons/icons';
import { Movie } from 'src/app/models/movie.i';
import { getPosterUrl } from 'src/app/util/get-asset-url';

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
  [x: string]: any;
  private platform = inject(Platform);

  @Input() movie?: Movie;

  isIos() {
    return this.platform.is('ios');
  }

  constructor() {
    addIcons({ star, bookmark });
  }

  getPoster(path: string) {
    return getPosterUrl(path);
  }
}
