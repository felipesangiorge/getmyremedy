import { Component, OnInit, Compiler } from '@angular/core';
import {LoginRegisterService}from'../login-register/login-register.service'

@Component({
  selector: 'gmr-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private loginRegisterService: LoginRegisterService, private compiler:Compiler) { }

  ngOnInit() {
    if(localStorage.getItem('userSessionTokenStorage') != null){
      this.verifyTkr()
    }
        this.compiler.clearCache()
  }

  verifyTkr(){

    this.loginRegisterService.verifyToken().subscribe(response => {

    }, response => {
      this.loginRegisterService.logout()
    })
  }

}
