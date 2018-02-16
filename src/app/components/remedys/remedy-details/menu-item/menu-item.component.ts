import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import{MenuItem}from'./menu-item.model'
import {Router}from'@angular/router'
import{ToastsManager}from'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import {CustomDialogComponent}from'../../../../shared/dialog/custom-dialog/custom-dialog.component'
import {RemedysService}from'../../remedys.service'

@Component({
  selector: 'gmr-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem:MenuItem
  @Output() add = new EventEmitter()

  constructor(private router: Router,
              public toastr: ToastsManager,
              vcr: ViewContainerRef,
              private customDialogComponent : CustomDialogComponent,
              private remedysService: RemedysService) {

    this.toastr.setRootViewContainerRef(vcr)
  }

  ngOnInit() {

  }
  emitAddEvent(){
    this.add.emit(this.menuItem)
    console.log(this.menuItem)
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

    console.log(obj)
  }
}
