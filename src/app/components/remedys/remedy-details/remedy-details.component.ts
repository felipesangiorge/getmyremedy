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



  constructor(private remedysService : RemedysService , private route : ActivatedRoute) {

 }

  ngOnInit() {

    //this.remedy = this.remedysService.remedyByMenuId(this.route.parent.snapshot.params['id'])
    this.remedysService.remedyByMenuId(this.route.snapshot.params['id'])
    .subscribe(remedy => { this.remedy = remedy; console.log(`log subscribe: ${JSON.stringify(this.remedy)}`); })
    //.subscribe(remedy => this.remedy = remedy)*/
    console.log(`Parametro : ${this.route.snapshot.params['id']}, Remédio ${this.remedy}`)
    
      }

  }
