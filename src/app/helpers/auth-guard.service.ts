import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../data/state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private store: Store ,public router: Router) { }

  canActivate():boolean {
    let isLoggedIn:boolean;
    this.store.select( (appState:AppState) => appState.Auth.isLoggedIn).subscribe(loginStatus =>  isLoggedIn = loginStatus )
    if(!isLoggedIn)
      this.router.navigate(['login']);
    return isLoggedIn
  }
}
