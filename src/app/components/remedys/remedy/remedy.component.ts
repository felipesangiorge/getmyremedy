import { Component, OnInit,Input } from '@angular/core';
import {Remedy}from'./remedy.model'
import {trigger,state,style,transition,animate}from "@angular/animations"


@Component({
  selector: 'gmr-remedy',
  templateUrl: './remedy.component.html',
  animations:[
    trigger('mouseFocus',[
      state('focus',style({
        transform: 'scale(1.1)'
      })),
      state('hide',style({
         transform: 'scale(1)'
      })),
      transition('focus => hide', animate('600ms ease-out')),
      transition('hide => focus', animate('1000ms ease-in'))
    ])
  ]
})
export class RemedyComponent implements OnInit {

  @Input() remedy:Remedy
  focus:string

  constructor() { }

  ngOnInit() {
  }

  mouseOver(){
    return this.focus = 'focus'
  }
  mouseLeave(){
   return  this.focus = 'hide'
  }

}
