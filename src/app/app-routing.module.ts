import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AngularFireAuthGuard, loggedIn, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["login"]);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectLoggedInToHome },
  },{
    path: 'pr/:id',
    loadChildren: () => import('./view-pr/view-pr.module').then( m => m.ViewPrPageModule),
    canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'pr/:id/edit',
    loadChildren: () => import('./edit-pr/edit-pr.module').then( m => m.EditPrPageModule)
  },
  {
    path: 'addpr',
    loadChildren: () => import('./prform/prform.module').then( m => m.PrformPageModule),
    canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'regform',
    loadChildren: () => import('./regform/regform.module').then( m => m.RegformPageModule),
    canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectLoggedInToHome },
  },
  {
    path: 'loginform',
    loadChildren: () => import('./loginform/loginform.module').then( m => m.LoginformPageModule),
    canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectLoggedInToHome },
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin },
    
  },{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./custom404/custom404.module').then( m => m.Custom404PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
