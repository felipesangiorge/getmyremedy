import { Component, OnInit } from '@angular/core';
import {Remedy}from'./remedy/remedy.model'
import {RemedysService}from'./remedys.service'

@Component({
  selector: 'gmr-remedys',
  templateUrl: './remedys.component.html'
})
export class RemedysComponent implements OnInit {

  remedys: Remedy[]
  input: any = true

  selectElements: any[] = [
          { Name: 'Todos'},
          { Name: 'Analgésico'},
          { Name: 'Anti-inflamatório'},
          { Name: 'Antigripal'},
          { Name: 'Asma'},
          { Name: 'Colesterol'},
          { Name: 'Diabetes'},
          { Name: 'Digestivo'},
          { Name: 'Dor e Febre'},
          { Name: 'Gastrite'},
          { Name: 'Hipertensão'},
          { Name: 'Osteoporose'},
          { Name: 'Vitamina'},
          { Name: 'Outro'}
          ];

  constructor(private remedysService :RemedysService) { }

  ngOnInit() {
    this.remedysService.remedys().subscribe(remedys => this.remedys = remedys)
  }

  onOptionChange(inf:any){
    if(inf != "Todos"){
    this.remedysService.remedyMenuByCategory(inf).subscribe(remedys => this.remedys = remedys)
  }else{
    this.ngOnInit()
  }
  }



}
