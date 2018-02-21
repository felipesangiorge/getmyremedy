import { Component, OnInit } from '@angular/core';
import {LoginRegisterService}from'./login-register.service'
import{ToastsManager}from'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'gmr-login-register',
  templateUrl: './login-register.component.html'
})
export class LoginRegisterComponent implements OnInit {

  constructor(private loginRegisterService: LoginRegisterService, public toastr: ToastsManager, vcr: ViewContainerRef) {
  this.toastr.setRootViewContainerRef(vcr);
}

  ngOnInit() {
  }

  checkInformations(inf:any){

  var response
  var password_confirm = inf.des_password_confirm

  response =  {nom_name:inf.nom_name,
              des_mail:inf.des_mail,
              des_address:inf.des_address,
              des_city:inf.des_city,
              des_state:inf.des_state,
              num_cep:inf.num_cep,
              num_phone:inf.num_phone,
              des_password:inf.des_password}
    if(response.des_password != password_confirm){
      this.toastr.error(`Error: As senhas não conferem umas com as outras.`)

    }else{

        this.loginRegisterService.registerNewUser(response)
              .subscribe(response => {

                    this.toastr.success(`Usuário criado com suecesso!`)

              }, response => this.toastr.error(`Error: Já existe um cadastro com esse e-mail.`))

          }


    }
}
