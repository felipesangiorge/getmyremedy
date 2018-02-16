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

  localStorageSet(mailStorage,tokenStorage,nameStorage){
    localStorage.setItem("userSessionMailStorage",mailStorage)
    localStorage.setItem("userSessionTokenStorage",tokenStorage)
    localStorage.setItem("userSessionNameStorage",nameStorage)
  }
  localStorageRemove(){
    localStorage.removeItem("userSessionMailStorage")
    localStorage.removeItem("userSessionTokenStorage")
    localStorage.removeItem("userSessionNameStorage")
  }

  checkLoginInformations(inf:any){
    var response
    response =  {des_mail:inf.des_mail,
                des_password:inf.des_password}

   this.loginRegisterService.loginService(response)
   .subscribe(response => {

      this.localStorageRemove()
      this.localStorageSet(response.user_mail,response.accessToken,response.nom_name)

      this.toastr.success(`Bem vindo ${response.user_mail} autenticado com sucesso!`)

      window.location.replace("/")

    }, response => this.toastr.error(`Usuário ou senha inválidos`))}


}
