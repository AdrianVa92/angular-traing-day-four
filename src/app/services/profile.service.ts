import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _apiEndpointProfile = 'https://stage-api-ubertickets.cloudstaff.com/v1/users/my';

  constructor() { }

}
