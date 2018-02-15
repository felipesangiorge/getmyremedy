import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule}from'@angular/router';
import{ROUTES}from'./app.routes';

import{RemedysService}from'./components/remedys/remedys.service'
import {LoginRegisterService}from'./components/login-register/login-register.service'

import {HttpModule}from'@angular/http';
import{FormsModule}from'@angular/forms';

import{ToastModule}from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RemedysComponent } from './components/remedys/remedys.component';
import { RemedyComponent } from './components/remedys/remedy/remedy.component';
import { RemedyDetailsComponent } from './components/remedys/remedy-details/remedy-details.component';
import { MenuItemComponent } from './components/remedys/remedy-details/menu-item/menu-item.component';
import { MenuComponent } from './components/remedys/remedy-details/menu/menu.component';
import { CommentsComponent } from './components/remedys/remedy-details/comments/comments.component';
import { RemedyRegisterComponent } from './components/remedy-register/remedy-register.component';
import { InputComponent } from './shared/input/input.component';
import { CustomDialogComponent } from './shared/dialog/custom-dialog/custom-dialog.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { LoginComponent } from './components/login-register/login/login.component';
import {LoggedInGuard}from'./components/login-register/loggedin.guard';
import { UsersComponent } from './components/users/users.component'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RemedysComponent,
    RemedyComponent,
    RemedyDetailsComponent,
    MenuItemComponent,
    MenuComponent,
    CommentsComponent,
    RemedyRegisterComponent,
    InputComponent,
    CustomDialogComponent,
    LoginRegisterComponent,
    LoginComponent,
    UsersComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [LoggedInGuard,
              RemedysService,
              LoginRegisterService,

              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
