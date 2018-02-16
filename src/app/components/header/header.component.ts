import { Component, OnInit } from '@angular/core';
import {LoginRegisterService}from'../login-register/login-register.service'
import{ToastsManager}from'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'gmr-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private loginRegisterService:LoginRegisterService,  public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr)
  }

  data:any = {
    mail : localStorage.getItem('userSessionMailStorage')
  }

  ngOnInit() {
    this.loggedIn()
  }

  loggedIn():boolean{
    return this.loginRegisterService.isLogged()
  }

  logout(){
    localStorage.removeItem('userSessionMailStorage')
    localStorage.removeItem('userSessionTokenStorage')
    localStorage.removeItem('userSessionNameStorage')

      this.toastr.info("Deslogado com sucesso!")
  }

}
