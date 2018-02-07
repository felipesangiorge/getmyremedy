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

  constructor(private remedysService : RemedysService,
              private route: ActivatedRoute,
              private remedy: RemedyDetailsComponent) { }

  ngOnInit() {
    this.menu = this.remedysService.remedyBySameName(this.route.parent.snapshot.params['id')

  }

}
