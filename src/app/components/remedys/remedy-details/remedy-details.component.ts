import { Component, OnInit, Input, Output } from '@angular/core';
import{Remedy}from'../remedy/remedy.model'
import{RemedysService}from'../remedys.service'
import{ActivatedRoute}from'@angular/router'
import {Observable}from'rxjs/Observable'

@Component({
  selector: 'gmr-remedy-details',
  templateUrl: './remedy-details.component.html'
})
export class RemedyDetailsComponent implements OnInit {

remedy:any

  constructor(private remedysService : RemedysService , private route : ActivatedRoute) {

 }


  ngOnInit() {


    this.remedysService.remedyByMenuId(this.route.snapshot.params['id'])
    .subscribe(response => {
          this.remedy = {des_name : response[0].des_name,
                          des_category: response[0].des_category,
                          des_dosage: response[0].des_dosage,
                          des_description:response[0].des_description,
                          des_imagePath:response[0].des_imagePath
                          }

    })

    console.log(`Parametro : ${this.route.snapshot.params['id']}, Remédio`)

      }

  }
