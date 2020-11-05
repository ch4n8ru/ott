import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { MockauthService } from '../../mockauth.service';
import { AuthState } from '../../models/auth';
import { AuthActionTypes, Login, LoginFailure, LoginSuccess } from './auth.action';


@Injectable({providedIn: 'root'})
export class AuthEffects {
    constructor(private dataPersistence : DataPersistence<AuthState>,
        private authService: MockauthService){}

    @Effect()
        login$ = this.dataPersistence.fetch(AuthActionTypes.Login , {
            run: (action: Login , state:AuthState) => {
                return this.authService.login(action.payload).pipe(
                    map((res:any) => {
                        if(res.status)
                            return new LoginSuccess(res)
                        return new LoginFailure(res)
                    })
                )
            },
            onError: () => {}
        })
}