import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent,
  children: [
    {
      path: '',
      redirectTo:'login',
      pathMatch:'full'
    },
    {
      path: 'login',
      loadChildren: () =>
        import('./login/login.module').then((m) => m.LoginModule),
    },
    {
      path: 'lock-screen',
      loadChildren: () =>
        import('./lock-screen/lock-screen.module').then(
          (m) => m.LockScreenModule
        ),
    },
    //Basic
    { path: 'login-basic', loadChildren: () => import('./basic/login/login.module').then(m => m.LoginModule) },
    { path: 'register-basic', loadChildren: () => import('./basic/register/register.module').then(m => m.RegisterModule) },
    { path: 'forgot-password-basic', loadChildren: () => import('./basic/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
    { path: 'reset-password-basic', loadChildren: () => import('./basic/reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
    { path: 'email-verification-basic', loadChildren: () => import('./basic/email-verification/email-verification.module').then(m => m.EmailVerificationModule) },
    { path: 'two-step-verification-basic', loadChildren: () => import('./basic/two-step-verification/two-step-verification.module').then(m => m.TwoStepVerificationModule) },
    { path: 'success-basic', loadChildren: () => import('./basic/success/success.module').then(m => m.SuccessModule) },
    //Cover
    { path: 'login-cover', loadChildren: () => import('./cover/login/login.module').then(m => m.LoginModule) },
    { path: 'register-cover', loadChildren: () => import('./cover/register/register.module').then(m => m.RegisterModule) },
    { path: 'forgot-password-cover', loadChildren: () => import('./cover/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
    { path: 'reset-password-cover', loadChildren: () => import('./cover/reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
    { path: 'email-verification-cover', loadChildren: () => import('./cover/email-verification/email-verification.module').then(m => m.EmailVerificationModule) },
    { path: 'two-step-verification-cover', loadChildren: () => import('./cover/two-step-verification/two-step-verification.module').then(m => m.TwoStepVerificationModule) },
    { path: 'success-cover', loadChildren: () => import('./cover/success/success.module').then(m => m.SuccessModule) },
    //Illustration
    { path: 'login-illustration', loadChildren: () => import('./illustration/login/login.module').then(m => m.LoginModule) },
    { path: 'register-illustration', loadChildren: () => import('./illustration/register/register.module').then(m => m.RegisterModule) },
    { path: 'forgot-password-illustration', loadChildren: () => import('./illustration/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
    { path: 'reset-password-illustration', loadChildren: () => import('./illustration/reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
    { path: 'email-verification-illustration', loadChildren: () => import('./illustration/email-verification/email-verification.module').then(m => m.EmailVerificationModule) },
    { path: 'two-step-verification-illustration', loadChildren: () => import('./illustration/two-step-verification/two-step-verification.module').then(m => m.TwoStepVerificationModule) },
    { path: 'success-illustration', loadChildren: () => import('./illustration/success/success.module').then(m => m.SuccessModule) },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
