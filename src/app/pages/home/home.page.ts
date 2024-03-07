import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { addIcons } from 'ionicons';
import { bookmarkOutline } from 'ionicons/icons';
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
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../../services/data.service';

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
    MessageComponent,
  ],
})
export class HomePage {
  private data = inject(DataService);
  constructor() {
    addIcons({bookmarkOutline});
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }
}
