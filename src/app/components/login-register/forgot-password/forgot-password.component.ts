import { Component, OnInit } from '@angular/core';
import {LoginRegisterService}from'../login-register.service'
import{ToastsManager}from'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'gmr-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private loginRegisterService:LoginRegisterService,
              public toastr: ToastsManager,
              vcr: ViewContainerRef) {
                this.toastr.setRootViewContainerRef(vcr)
              }

  ngOnInit() {
  }

  checkInformations(inf:any){
    let obj = {des_mail:inf.des_mail}

    this.loginRegisterService.forgotPassword(obj).subscribe(response => {

      this.toastr.success(`${response}`)

    }, response =>{

      this.toastr.error(`Error: E-mail não cadastrado.`)
    })
  }

}
