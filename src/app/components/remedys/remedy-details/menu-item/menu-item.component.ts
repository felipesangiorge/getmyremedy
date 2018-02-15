import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import{MenuItem}from'./menu-item.model'
import {Router}from'@angular/router'

@Component({
  selector: 'gmr-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem:MenuItem
  @Output() add = new EventEmitter()

  constructor(private router: Router) { }

  ngOnInit() {

  }
  emitAddEvent(){
    this.add.emit(this.menuItem)
    console.log(this.menuItem)
  }

  checkInformations(inf:any){
    console.log(inf)
  }
}
