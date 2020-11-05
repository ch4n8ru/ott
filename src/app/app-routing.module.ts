import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {AuthGuardService as AuthGuard} from './helpers/auth-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
      path:"login",
      component:LoginComponent
    },
    {
      path: 'home',
      loadChildren: () => import('./user/user.module').then(m => m.UserModule),
      canActivate:[AuthGuard]
    },
    {
      path: "",
      redirectTo: "home",
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
