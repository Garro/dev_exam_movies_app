import { Injectable } from '@angular/core';
import {
  CapacitorHttp,
  HttpHeaders,
  HttpOptions,
  HttpParams,
} from '@capacitor/core';

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
  public async request(
    method: HttpMethod,
    url: string,
    headers?: HttpHeaders,
    body?: any,
    params?: HttpParams
  ) {
    const options: HttpOptions = { url, headers, data: body, params };

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
}
