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
     response =  {userName:inf.userName,
                  userEmail:inf.userEmail,
                  phone:inf.phone,
                  name:inf.name,
                  dosage:inf.dosage,
                  description:inf.description,
                  validateDate:inf.validateDate,
                  imagePath:`assets/img/remedys/${inf.name.toLowerCase()}.jpg`,
                  remedyId:inf.name}

    this.remedysService.remedyRegisterService(response)
    .subscribe((remedyId: string)=>{

      this.showSuccess(response.name)

    })

  }

}
