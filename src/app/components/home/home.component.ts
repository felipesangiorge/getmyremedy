import { Component, OnInit } from '@angular/core';
import {LoginRegisterService}from'../login-register/login-register.service'

@Component({
  selector: 'gmr-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private loginRegisterService: LoginRegisterService) { }

  ngOnInit() {  }

}
