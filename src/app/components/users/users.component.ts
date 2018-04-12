import { Component, OnInit } from '@angular/core';
import {LoginRegisterService}from'../login-register/login-register.service'
import{ToastsManager}from'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import {Observable}from'rxjs/Observable'
import {MenuItem}from'../remedys/remedy-details/menu-item/menu-item.model'
import {RemedysService}from'../remedys/remedys.service'
import{Router}from '@angular/router'

@Component({
  selector: 'gmr-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

    menu: Observable<MenuItem[]>
    user = {user_mail: localStorage.getItem('userSessionMailStorage'),
            nom_name: localStorage.getItem('userSessionNameStorage'),
            des_address:'',
            des_city:'',
            des_state:''}

    selectElements: any[]
    selectElementsCity:any[]

  constructor(private loginRegisterService: LoginRegisterService,
              public toastr: ToastsManager,
              vcr: ViewContainerRef,
              private remedysService:RemedysService,
              private router:Router) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {

    if(localStorage.getItem('userSessionTokenStorage') != null){
      this.verifyTkr()
    }
    this.menu = this.remedysService.remedyByUsers(localStorage.getItem('userSessionMailStorage'))
    this.loginRegisterService.getAllStates().subscribe(response => {
      this.selectElements = response
    })
    this.loginRegisterService.getUser(localStorage.getItem('userSessionMailStorage')).subscribe(response => console.log(response))
  }

  onOptionChange(inf:any){

    this.loginRegisterService.getCityByState(inf).subscribe(response =>{
      this.selectElementsCity = response
    })
  }

  verifyTkr(){

    this.loginRegisterService.verifyToken().subscribe(response => {

    }, response => {
      this.loginRegisterService.logout()
      this.loginRegisterService.handleLogin()
    })
  }

  returnHome(){
    this.router.navigate(['/'])
  }

  checkInformations(inf:any,state:any,city:any){


  var response
  var password_confirm = inf.des_password_confirm


  response =  {des_mail:localStorage.getItem('userSessionMailStorage'),
              des_address:inf.des_address,
              des_city:city,
              des_state:state,
              num_cep:inf.num_cep,
              num_phone:inf.num_phone,
              des_password:inf.des_password}


    if(response.des_password != password_confirm ){

        this.toastr.error(`Error: As senhas não conferem umas com as outras.`)

    }
      if(city == 'undefined' || state =='undefined'){

          this.toastr.error(`Error: Os campos estado e cidade devem ser preenchidos.`)

        }
      else{

        this.loginRegisterService.editUser(response)
              .subscribe(response => {

                    this.toastr.success(`Usuário editado com suecesso!`)

              }, response => {
                this.toastr.error(`Error: você precisa estar logado para editar o usuário.`)
                this.loginRegisterService.logout()
                this.loginRegisterService.handleLogin()
              })

        }

    }

}
