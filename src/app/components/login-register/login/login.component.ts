import { Component, OnInit } from '@angular/core';
import {LoginRegisterService}from'../login-register.service'
import{ToastsManager}from'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import {User}from'../user.model'


@Component({
  selector: 'gmr-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private loginRegisterService: LoginRegisterService, public toastr: ToastsManager, vcr: ViewContainerRef) {
  this.toastr.setRootViewContainerRef(vcr);
}

  ngOnInit() {
  }


  checkLoginInformations(inf:any){
    var response
    response =  {des_mail:inf.des_mail,
                des_password:inf.des_password}

   this.loginRegisterService.loginService(response)
   .subscribe(response => {

      localStorage.setItem("userSessionMailStorage",response.user_mail)
      localStorage.setItem("userSessionTokenStorage",response.accessToken)

      this.toastr.success(`Bem vindo ${response.user_mail} autenticado com sucesso!`)
    }, response => this.toastr.error(`Usuário ou senha inválidos`))}

  /*checkLoginInformations(inf:any){
    var response
    response =  {des_mail:inf.des_mail,
                des_password:inf.des_password}

   this.loginRegisterService.loginService(response)
   .subscribe((res:string)=>{


   if(!{res: "login-access-fail"}){
       console.log(res)


  }else{
         console.log(res)
     }

   })

 }*/



}
