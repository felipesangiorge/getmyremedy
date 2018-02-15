import { Component, OnInit } from '@angular/core';
import {LoginRegisterService}from'../login-register/login-register.service'
import{ToastsManager}from'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import {Observable}from'rxjs/Observable'
import {MenuItem}from'../remedys/remedy-details/menu-item/menu-item.model'
import {RemedysService}from'../remedys/remedys.service'

@Component({
  selector: 'gmr-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

    menu: Observable<MenuItem[]>

  constructor(private loginRegisterService: LoginRegisterService,
              public toastr: ToastsManager,
              vcr: ViewContainerRef,
              private remedysService:RemedysService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.menu = this.remedysService.remedyByUsers(localStorage.getItem('userSessionMailStorage'))
  }

  checkInformations(inf:any){

  var response

  response =  {des_mail:localStorage.getItem('userSessionMailStorage'),
              des_address:inf.des_address,
              des_city:inf.des_city,
              des_state:inf.des_state,
              num_cep:inf.num_cep,
              num_phone:inf.num_phone,
              des_password:inf.des_password}

        this.loginRegisterService.editUser(response)
              .subscribe(response => {

                    this.toastr.success(`Usuário editado com suecesso!`)

              }, response => this.toastr.error(`Error: você precisa estar logado para editar o usuário.`))



    }

}
