import { Component } from '@angular/core';
import {Router}from'@angular/router'
import { HostListener} from "@angular/core";
import {trigger,state,style,transition,animate}from "@angular/animations"

@Component({
  selector: 'gmr-app',
  templateUrl: './app.component.html',
  animations:[
  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-3000%)'}),
      animate(900)
    ]),
    transition('* => void', [
      animate(300, style({transform: 'translateX(100%)'}))
    ])
  ])
 ]
})
export class AppComponent {

  content= 'Welcome to GetMyRemedy'
  state:boolean
  showBackTop:boolean = false
  flyInOutVisibility = 'in'

  constructor(public router:Router){

  }

  ngOnInit(){

  }

  @HostListener("window:scroll", ['$event'])
onWindowScroll() {

  if(window.pageYOffset > 500){
    this.showBackTop = true
  }else{
    this.showBackTop = false
  }
}

backToTop(){
  window.scrollTo(0,0)
}

toggleFlyIn(){
  this.flyInOutVisibility = 'in'
}


}
