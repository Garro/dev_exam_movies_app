import { Injectable } from '@angular/core';
import {
  CapacitorHttp,
  HttpHeaders,
  HttpOptions,
  HttpParams,
} from '@capacitor/core';
import { environment } from 'src/environments/environment';

export const enum HttpMethod {
  'post',
  'get',
  'delete',
  'update',
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public async request(method: HttpMethod, url: string, body?: any) {
    const options: HttpOptions = {
      url,
      headers: this.buildHeaders(),
      data: body,
    };

    switch (method) {
      case HttpMethod.get:
        return CapacitorHttp.get(options);
      case HttpMethod.post:
        return CapacitorHttp.post(options);
      case HttpMethod.update:
        return CapacitorHttp.patch(options);
      case HttpMethod.delete:
        return CapacitorHttp.delete(options);
    }
  }

  private buildHeaders(): HttpHeaders {
    return {
      accept: 'application/json',
      Authorization: `Bearer ${environment.api.accessToken}`,
    };
  }
}
