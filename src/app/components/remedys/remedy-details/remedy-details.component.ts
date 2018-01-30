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
private remedyName
private remedyDosage

  constructor(private remedysService : RemedysService , private route : ActivatedRoute) {

 }

 setRemedyName(des_name){
   this.remedyName =  des_name
 }
 setRemedyDosage(des_dosage){
   this.remedyDosage = des_dosage
 }
 getRemedyName(){
   return this.remedyName
 }
 getRemedyDosage(){
    return this.remedyDosage
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
                  this.setRemedyName(this.remedy.des_name)
                  this.setRemedyDosage(this.remedy.des_dosage)

    })

    }

  }
