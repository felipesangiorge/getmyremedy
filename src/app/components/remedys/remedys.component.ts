import { Component, OnInit } from '@angular/core';
import {Remedy}from'./remedy/remedy.model'
import {RemedysService}from'./remedys.service'

@Component({
  selector: 'gmr-remedys',
  templateUrl: './remedys.component.html'
})
export class RemedysComponent implements OnInit {

  remedys: Remedy[]

  constructor(private remedysService :RemedysService) { }

  ngOnInit() {
    this.remedysService.remedys().subscribe(remedys =>this.remedys = remedys)
  }

}
