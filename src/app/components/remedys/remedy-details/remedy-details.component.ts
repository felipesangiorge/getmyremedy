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

  remedy:Remedy



  remedytest = {"idtb_remedys_menu":1,
  "des_name":"Aspirina",
  "des_dosage":"10ml","des_category":"Analgesico",
  "des_description":"A Aspirina é um remédio que contém como substância ativa o ácido acetilsalicílico,que é um anti-inflamatório não esteroide, que serve para aliviar a dor e baixar a febre em adultos e crianças.",
  "des_imagePath":"assets/img/remedys/remedy.jpg"}

  constructor(private remedysService : RemedysService , private route : ActivatedRoute) {

 }

  ngOnInit() {

    //this.remedy = this.remedysService.remedyByMenuId(this.route.parent.snapshot.params['id'])
    this.remedysService.remedyByMenuId(this.route.snapshot.params['id'])
    .subscribe(response => { this.remedy = response; console.log(`log subscribe: ${JSON.stringify(this.remedy)}`); })
    //.subscribe(remedy => this.remedy = remedy)*/
    console.log(`Parametro : ${this.route.snapshot.params['id']}, Remédio ${this.remedy}`)

      }

  }
