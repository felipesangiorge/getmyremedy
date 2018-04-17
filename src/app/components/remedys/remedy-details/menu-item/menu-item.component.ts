import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import{MenuItem}from'./menu-item.model'
import {Router}from'@angular/router'
import{ToastsManager}from'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import {CustomDialogComponent}from'../../../../shared/dialog/custom-dialog/custom-dialog.component'
import {RemedysService}from'../../remedys.service'
import {trigger,state,style,transition,animate}from "@angular/animations"

@Component({
  selector: 'gmr-menu-item',
  templateUrl: './menu-item.component.html',
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
export class MenuItemComponent implements OnInit {

  @Input() menuItem:MenuItem
  @Output() add = new EventEmitter()
  focus:string

  constructor(private router: Router,
              public toastr: ToastsManager,
              vcr: ViewContainerRef,
              private customDialogComponent : CustomDialogComponent,
              private remedysService: RemedysService) {

    this.toastr.setRootViewContainerRef(vcr)
  }

  ngOnInit() {

  }

  mouseOver(){
    return this.focus = 'focus'
  }
  mouseLeave(){
   return  this.focus = 'hide'
  }

  emitAddEvent(){
    this.add.emit(this.menuItem)
  }

  checkInformations(inf:any){
    var obj = {
        idtb_remedys:inf,
        des_mail:localStorage.getItem('userSessionMailStorage')
    }

    this.remedysService.deleteUserRemedy(obj).subscribe(response => {

          this.toastr.success(`Anuncio apagado com sucesso !`)

    },response => {

      this.toastr.error('Você deve estar autenticado para excluir o anuncio')
    })

  }
}
