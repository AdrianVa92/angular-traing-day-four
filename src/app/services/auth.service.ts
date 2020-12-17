import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _requestService: RequestService) { }

  login (data: {}): Observable<any> {
    return this._requestService.post('auth/login', data)
  }
}
