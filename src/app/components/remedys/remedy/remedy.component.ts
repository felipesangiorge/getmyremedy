import { Component, OnInit,Input } from '@angular/core';
import {Remedy}from'./remedy.model'

@Component({
  selector: 'gmr-remedy',
  templateUrl: './remedy.component.html'
})
export class RemedyComponent implements OnInit {

  @Input() remedy:Remedy

  constructor() { }

  ngOnInit() {
  }

}
