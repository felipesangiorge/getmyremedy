import { Component, OnInit } from '@angular/core';
import {RemedysService}from'../remedys/remedys.service'
import{ToastsManager}from'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'gmr-remedy-register',
  templateUrl: './remedy-register.component.html'
})
export class RemedyRegisterComponent implements OnInit {

  constructor(private remedysService : RemedysService , public toastr: ToastsManager, vcr: ViewContainerRef) {
  this.toastr.setRootViewContainerRef(vcr);
}

  ngOnInit() {
  }

  showSuccess(response) {
        this.toastr.success(`O remédio ${response} criado com sucesso!`, 'Sucesso!',"ok");
    }
  showError(error){
      this.toastr.error(`Error: ${error} O remédio não pode ser cadastrado, tente novamente mais tarde!`)
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
                  console.log(localStorage.getItem("userSessionTokenStorage"))

    this.remedysService.remedyRegisterService(response)
    .subscribe((response: string)=>{

      this.showSuccess(response)

    })

    console.log(response)

  }

}
