import { Component, OnInit } from '@angular/core';
import {RemedysService}from'../remedys/remedys.service'
import{ToastsManager}from'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import{LoginRegisterService}from'../login-register/login-register.service'

@Component({
  selector: 'gmr-remedy-register',
  templateUrl: './remedy-register.component.html'
})
export class RemedyRegisterComponent implements OnInit {

  constructor(private remedysService : RemedysService ,private loginRegisterService:LoginRegisterService, public toastr: ToastsManager, vcr: ViewContainerRef) {
  this.toastr.setRootViewContainerRef(vcr);
}

  ngOnInit() {
  }

  showSuccess(response) {
        this.toastr.success(`O remédio cadastrado com sucesso!`, 'Sucesso!',"ok");
    }
  showError(error){
      this.toastr.error(`Error: ${error}`)
  }

  checkInformations(inf:any ):void{
     var response
     response =  {des_name:inf.des_name,
                  des_category:inf.des_category,
                  des_dosage:inf.des_dosage,
                  des_validate:inf.des_validate,
                  des_description:inf.des_description,
                  des_imagePath:`assets/img/remedys/${inf.des_name.toLowerCase()}.jpg`,
                  idtb_remedy_by_user:localStorage.getItem("userSessionMailStorage")}

                  console.log(localStorage.getItem("userSessionMailStorage"))
                  console.log(this.loginRegisterService.isLogged())

    this.remedysService.remedyRegisterService(response)
    .subscribe((response: string)=>{

      this.showSuccess(response)

    }, response => {
      if(this.loginRegisterService.isLogged()){

      this.showError(`Error: ${response}`)

      }else{
      this.showError("Você precisa se autenticar, caso já esteja autenticado tente novamente em alguns minutos.")
        }
    })



  }

}
