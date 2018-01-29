import { Component, OnInit } from '@angular/core';
import {LoginRegisterService}from'../login-register.service'
import{ToastsManager}from'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import {User}from'../user.model'
import{Router}from'@angular/router'

@Component({
  selector: 'gmr-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private loginRegisterService: LoginRegisterService,
              public toastr: ToastsManager,
              vcr: ViewContainerRef) {

  this.toastr.setRootViewContainerRef(vcr);

}

  ngOnInit() {
  }

  localStorageSet(mailStorage,tokenStorage){
    localStorage.setItem("userSessionMailStorage",mailStorage)
    localStorage.setItem("userSessionTokenStorage",tokenStorage)
  }
  localStorageRemove(){
    localStorage.removeItem("userSessionMailStorage")
    localStorage.removeItem("userSessionTokenStorage")
  }

  checkLoginInformations(inf:any){
    var response
    response =  {des_mail:inf.des_mail,
                des_password:inf.des_password}

   this.loginRegisterService.loginService(response)
   .subscribe(response => {

      this.localStorageRemove()
      this.localStorageSet(response.user_mail,response.accessToken)

      this.toastr.success(`Bem vindo ${response.user_mail} autenticado com sucesso!`)

      window.location.replace("/")

    }, response => this.toastr.error(`Usuário ou senha inválidos`))}


}
