import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule}from'@angular/router';
import{ROUTES}from'./app.routes';

import{RemedysService}from'./components/remedys/remedys.service'
import {HttpModule}from'@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RemedysComponent } from './components/remedys/remedys.component';
import { RemedyComponent } from './components/remedys/remedy/remedy.component';
import { RemedyDetailsComponent } from './components/remedys/remedy-details/remedy-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RemedysComponent,
    RemedyComponent,
    RemedyDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RemedysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
