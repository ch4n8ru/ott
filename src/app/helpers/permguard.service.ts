import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserRights } from '../data/models/auth';
import { AppState } from '../data/state';
import { SetRedirectURL } from '../data/state/auth/auth.action';

@Injectable({
  providedIn: 'root'
})
export class PermguardService implements CanActivate {

  constructor(private store: Store ,public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, routestate: RouterStateSnapshot):boolean {
    let userRight: UserRights;
    this.store.select( (appState:AppState) => appState.Auth.user).subscribe(user => userRight = user.rights )
    if(userRight == UserRights.FULL)
   { 
     return true
        }
    this.store.dispatch(new SetRedirectURL(routestate.url));
    this.router.navigate(['login']);
    return false
  }
}
