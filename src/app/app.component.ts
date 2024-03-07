import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HttpMethod, HttpService } from './services/http.service';
import { ApiEndpoint } from './data/endpoints';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private httpService: HttpService) {}

  init() {
    this.httpService.request(HttpMethod.get, ApiEndpoint.authenticate(''));
  }
}
