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
    ]),
    trigger('mouseFocus',[
      state('focus',style({
        transform: 'scale(1.2)'
      })),
      state('hide',style({
         transform: 'scale(1)'
      })),
      transition('focus => hide', animate('600ms ease-out')),
      transition('hide => focus', animate('600ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {

    show = 'hide'
    showTwo='hide'
    showTwoWorks='hide'
    showTwoWorksText='hide'
    showTwoPhone='hide'
    showTree='hide'
    showTreeMon='hide'
    showTreeTim='hide'
    showTreeSha='hide'
    showFour='hide'
    showFourBear='hide'
    showFourText='hide'
    showFive='hide'
    showBackTop:boolean = false
    focus:string
    focusWorks:string
    focusPhone:string
    focusMon:string
    focusTim:string
    focusSha:string

  constructor(private loginRegisterService: LoginRegisterService, private _compiler:Compiler) {
    this._compiler.clearCache()
  }

  ngOnInit() {

    setTimeout(()=>{ this.show = 'show'}, 500)
    if(localStorage.getItem('userSessionTokenStorage') != null){
      this.verifyTkr()
    }
      this._compiler.clearCache()
  }

  @HostListener("window:scroll", ['$event'])
onWindowScroll() {

  if(window.pageYOffset > 180){
    setTimeout(()=>{ this.showTwo = 'show'}, 100)
    setTimeout(()=>{ this.showTwoWorks = 'show'}, 500)
    setTimeout(()=>{ this.showTwoWorksText = 'show'}, 700)
    setTimeout(()=>{ this.showTwoPhone = 'show'}, 1000)
  }if(window.pageYOffset > 500){
    setTimeout(()=>{ this.showTree = 'show'}, 100)
    setTimeout(()=>{ this.showTreeMon = 'show'}, 200)
    setTimeout(()=>{ this.showTreeTim = 'show'}, 500)
    setTimeout(()=>{ this.showTreeSha = 'show'}, 700)
  }if(window.pageYOffset > 1100){
    setTimeout(()=>{ this.showFour = 'show'}, 100)
    setTimeout(()=>{ this.showFourBear = 'show'}, 700)
    setTimeout(()=>{ this.showFourText = 'show'}, 1000)

  }if(window.pageYOffset > 1350){
setTimeout(()=>{ this.showFive = 'show'}, 100)
  }
}

mouseOverWorks(){
  return this.focusWorks = 'focus'
}
mouseLeaveWorks(){
 return  this.focusWorks = 'hide'
}
mouseOverPhone(){
  return this.focusPhone = 'focus'
}
mouseLeavePhone(){
 return  this.focusPhone = 'hide'
}
mouseOverMon(){
  return this.focusMon = 'focus'
}
mouseLeaveMon(){
 return  this.focusMon = 'hide'
}
mouseOverTim(){
  return this.focusTim = 'focus'
}
mouseLeaveTim(){
 return  this.focusTim = 'hide'
}
mouseOverSha(){
  return this.focusSha = 'focus'
}
mouseLeaveSha(){
 return  this.focusSha = 'hide'
}

  verifyTkr(){

    this.loginRegisterService.verifyToken().subscribe(response => {

    }, response => {
      this.loginRegisterService.logout()
    })
  }


}
