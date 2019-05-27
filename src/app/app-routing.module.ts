import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  // NbAuthComponent,
  // NbLoginComponent,
  // NbLogoutComponent
  NbRegisterComponent,
  // NbRequestPasswordComponent,
  // NbResetPasswordComponent,
} from '@nebular/auth';

// Auth Personalizado NAM

import { NgxAuthComponent } from './@theme/components/auth/auth.component';
// import { NgxAuthBlockComponent } from './@theme/components/auth/auth-block/auth-block.component';
import { NgxLoginComponent } from './@theme/components/auth/login/login.component';
import { NgxLogoutComponent } from './@theme/components/auth/logout/logout.component';
import { RequestPasswordComponent} from './@theme/components/auth/request-password/request-password.component';
import { ResetPasswordComponent } from './@theme/components/auth/reset-password/reset-password.component';
/*import { NgxRegisterComponent } from './components/auth/register/register.component';
import { NgxRequestPasswordComponent } from './components/auth/request-password/request-password.component';

*/

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'auth',
    component: NgxAuthComponent,
    children: [
      {
        path: '',
        component: NgxLoginComponent,
      },
      {
        path: 'login',
        component: NgxLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NgxLogoutComponent,
      },
      {
        path: 'request-password',
        component: RequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
    ],
  },
  // { path: '', redirectTo: 'pages', pathMatch: 'full' },
  // { path: '**', redirectTo: 'pages' },
  { path: '', redirectTo: '/pages/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/pages/dashboard' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
