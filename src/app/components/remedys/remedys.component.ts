import { Component, OnInit } from '@angular/core';
import {Remedy}from'./remedy/remedy.model'
import {RemedysService}from'./remedys.service'
import {trigger,state,style,transition,animate}from "@angular/animations"

@Component({
  selector: 'gmr-remedys',
  templateUrl: './remedys.component.html',
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class RemedysComponent implements OnInit {

  remedys: Remedy[]
  input: any = true
  show = 'hide'
  focus = 'focus'

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
    this.remedysService.remedys().subscribe(remedys => {
      this.remedys = remedys
      this.toggleIn()
    })
  }

  onOptionChange(inf:any){
      if(inf != "Todos"){
      this.input = true
      this.remedysService.remedyMenuByCategory(inf).subscribe(remedys => {
        this.remedys = remedys
            if(!remedys.length){
              this.input = false
            }else{

              this.input = true
            }
      })
    }else{
      this.input = true
      this.ngOnInit()
    }
  }

  toggleIn() {
   this.show = 'show'
 }


  hasNoResponse():boolean{
    return this.input
  }


}
