import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule}from'@angular/router';
import{ROUTES}from'./app.routes';

import{RemedysService}from'./components/remedys/remedys.service'
import {HttpModule}from'@angular/http';
import{FormsModule}from'@angular/forms';

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
    InputComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RemedysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
