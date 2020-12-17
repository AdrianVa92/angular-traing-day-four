import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoginAuth } from '../../states/auth.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLogged:boolean = false

  logins = {
    username: '',
    password: ''
  }
  constructor(private _store: Store) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    if (this.logins) {
      const login = Object.assign({}, this.logins);

      this._store.dispatch( new LoginAuth(login) );
    }
  }

}
