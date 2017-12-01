import { Component, OnInit } from '@angular/core';
import{Remedy}from'../remedy/remedy.model'
import{RemedysService}from'../remedys.service'
import{ActivatedRoute}from'@angular/router'

@Component({
  selector: 'gmr-remedy-details',
  templateUrl: './remedy-details.component.html'
})
export class RemedyDetailsComponent implements OnInit {

  remedy:Remedy

  constructor(private remedysService : RemedysService , private route : ActivatedRoute) { }

  ngOnInit() {
    this.remedysService.remedyById(this.route.snapshot.params['id']).subscribe(remedy => this.remedy = remedy)
  }

}
