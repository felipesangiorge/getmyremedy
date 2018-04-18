import { Component, OnInit, Compiler } from '@angular/core';
import {LoginRegisterService}from'../login-register/login-register.service'
import {trigger,state,style,transition,animate}from "@angular/animations"
import { HostListener} from "@angular/core";

@Component({
  selector: 'gmr-home',
  templateUrl: './home.component.html',
  animations: [
    trigger('popOverStateOne', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ]),
    trigger('popOverStateTwo', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ]),
    trigger('popOverStateTree', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {

    show = 'hide'
    showTwo='hide'
    showTree='hide'
    showBackTop:boolean = false


  constructor(private loginRegisterService: LoginRegisterService, private compiler:Compiler) { }

  ngOnInit() {
    setTimeout(()=>{ this.show = 'show'}, 500)
    setTimeout(()=>{ this.showTwo = 'show'}, 1000)
    setTimeout(()=>{ this.showTree = 'show'}, 1500)
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
