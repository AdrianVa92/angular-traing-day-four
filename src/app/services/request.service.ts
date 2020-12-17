import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private _apiEndpoint = 'https://stage-api-ubertickets.cloudstaff.com/v1/';

  constructor(private _httpClient: HttpClient) { }

  get(url = '', params = []): Observable<any> {
    return this._httpClient.get(this._apiEndpoint + url);
  }

  post(url = '', data, params = [], headers = []): Observable<any> {
    return this._httpClient.post(this._apiEndpoint + url, data);
  }

  put(url = '', data, params = [], headers = []): Observable<any> {
    return this._httpClient.put(this._apiEndpoint + url, data);
  }

  delete(url = '', params = []): Observable<any> {
    return this._httpClient.delete(this._apiEndpoint + url,);
  }
}
