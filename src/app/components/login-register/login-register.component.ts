import { Component, OnInit } from '@angular/core';
import {LoginRegisterService}from'./login-register.service'
import{ToastsManager}from'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'gmr-login-register',
  templateUrl: './login-register.component.html'
})
export class LoginRegisterComponent implements OnInit {

  selectElements: any[]
  selectElementsCity:any[]

  constructor(private loginRegisterService: LoginRegisterService, public toastr: ToastsManager, vcr: ViewContainerRef) {
  this.toastr.setRootViewContainerRef(vcr);
}

ngOnInit() {
  if(localStorage.getItem('userSessionTokenStorage') != null){
    this.verifyTkr()
  }
  this.loginRegisterService.getAllStates().subscribe(response => {
    this.selectElements = response
  })
}

verifyTkr(){

  this.loginRegisterService.verifyToken().subscribe(response => {

  }, response => {
    this.loginRegisterService.logout()
    this.loginRegisterService.handleLogin()
  })
}

onOptionChange(inf:any){

  this.loginRegisterService.getCityByState(inf).subscribe(response =>{
    this.selectElementsCity = response
  })
}

  checkInformations(inf:any,state:any,city:any){

  var response
  var password_confirm = inf.des_password_confirm

  response =  {nom_name:inf.nom_name,
              des_mail:inf.des_mail,
              des_address:inf.des_address,
              des_city:city,
              des_state:state,
              num_cep:inf.num_cep,
              num_phone:inf.num_phone,
              des_password:inf.des_password}

    if(response.des_password != password_confirm){
      this.toastr.error(`Error: As senhas não conferem umas com as outras.`)

    }
      if(city == 'undefined' || state =='undefined'){

          this.toastr.error(`Error: Os campos estado e cidade devem ser preenchidos.`)

        }
        else{

          this.loginRegisterService.registerNewUser(response)
                .subscribe(response => {

                      this.toastr.success(`Usuário criado com suecesso!`)

                }, response => this.toastr.error(`Error: Já existe um cadastro com esse e-mail.`))

            }


    }
}
