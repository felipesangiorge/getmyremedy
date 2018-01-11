import { Component, OnInit } from '@angular/core';
import {RemedysService}from'../remedys/remedys.service'

@Component({
  selector: 'gmr-remedy-register',
  templateUrl: './remedy-register.component.html'
})
export class RemedyRegisterComponent implements OnInit {

  constructor(private remedysService : RemedysService ) { }

  ngOnInit() {
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

    console.log(response)
  /*  this.remedysService.remedyRegisterService(response)
    .subscribe((remedyId: string)=>{
      console.log(`Id remédio = ${remedyId}`)
    })
    console.log(`Dados enviados : ${response}`)*/
  }

}
