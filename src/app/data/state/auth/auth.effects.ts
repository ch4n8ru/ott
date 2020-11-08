import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { AppState } from '..';
import { MockauthService } from '../../mockauth.service';
import { AuthState } from '../../models/auth';
import { AuthActionTypes, Login, LoginFailure, LoginSuccess, LogOut, LogOutComplete } from './auth.action';


@Injectable({providedIn: 'root'})
export class AuthEffects {
    constructor(private dataPersistence : DataPersistence<AppState>,
        private authService: MockauthService , public router: Router,
        private toastService : ToastrService){}

    @Effect()
        login$ = this.dataPersistence.fetch(AuthActionTypes.Login , {
            run: (action: Login , state) => {
                return this.authService.login(action.payload).pipe(
                    map((res:any) => {
                        if(res.status)
                            {       
                                const redirectUrl = state.Auth.redirectUrl
                                this.router.navigate([redirectUrl])
                                return new LoginSuccess(res)
                            }
                            this.toastService.error("Please check credentials" , "Login Failed")
                        return new LoginFailure(res)
                    })
                )
            },
            onError: () => {}
        })


        @Effect()
        logOut$ = this.dataPersistence.fetch(AuthActionTypes.LogOut , {
            run: (action: LogOut , state) => {
                return this.authService.logOut().pipe(
                    map((res:any) => {
                        this.router.navigate(['/login'])
                       return new LogOutComplete()
                    })
                )
            },
            onError: () => {}
        })
}