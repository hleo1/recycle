import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'landing-page', loadChildren: './landing-page/landing-page.module#LandingPagePageModule' },
  { path: 'user-login-page', loadChildren: './user-login-page/user-login-page.module#UserLoginPagePageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'wallet', loadChildren: './wallet/wallet.module#WalletPageModule' },
  { path: 'learn-why', loadChildren: './learn-why/learn-why.module#LearnWhyPageModule' },
  { path: 'learn-how', loadChildren: './learn-how/learn-how.module#LearnHowPageModule' },
  { path: 'learn-what', loadChildren: './learn-what/learn-what.module#LearnWhatPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
