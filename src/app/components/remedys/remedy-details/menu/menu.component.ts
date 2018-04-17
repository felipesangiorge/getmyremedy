import { Component, OnInit } from '@angular/core';
import {MenuItem}from'../menu-item/menu-item.model'
import {RemedysService}from'../../remedys.service'
import{ActivatedRoute}from'@angular/router'
import {Observable}from'rxjs/Observable'
import{RemedyDetailsComponent}from'../remedy-details.component'


@Component({
  selector: 'gmr-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>
  selectElements: any[]
  response:any = []
  constructor(private remedysService : RemedysService,
              private route: ActivatedRoute,
              private remedy: RemedyDetailsComponent) { }

  ngOnInit() {
    let arr = ["Todos"]
    let i = 0
    this.response.num_id = this.route.parent.snapshot.params['id']

    this.menu = this.remedysService.remedyBySameName(this.route.parent.snapshot.params['id'])
    this.remedysService.remedyBySameName(this.route.parent.snapshot.params['id']).subscribe(response => {
    response.forEach(function(value){
      if(arr[i] != value.des_city){
        arr.push(value.des_city)
          }
        i++
      })
    })
  
    this.selectElements = arr
  }

  onOptionChange(inf:any){
    if(inf != 'Todos'){
      this.response.des_city = inf
      this.menu = this.remedysService.remedyBySameNameAndCity(this.response.num_id,this.response.des_city)
    }
      else{
        this.ngOnInit()
      }
  }

}
