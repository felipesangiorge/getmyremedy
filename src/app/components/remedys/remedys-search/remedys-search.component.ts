import { Component, OnInit } from '@angular/core';
import {Subject} from'rxjs/Subject'
import {RemedysService}from'../remedys.service'
import {trigger,state,style,transition,animate}from "@angular/animations"

@Component({
  selector: 'gmr-remedys-search',
  templateUrl: './remedys-search.component.html',
  animations: [
  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(500)
    ]),
    transition('* => void', [
      animate(300, style({transform: 'translateX(100%)'}))
    ])
  ]),
  trigger('onFocused',[
    state('focus',style({
      transform: 'scale(1.1)'
    })),
    state('hide',style({
       transform: 'scale(1)'
    })),
    transition('focus => hide', animate('600ms ease-out')),
    transition('hide => focus', animate('1000ms ease-in'))
  ]

  )
]
})
export class RemedysSearchComponent implements OnInit {

  searchResults:Object
  searchTerms= new Subject<string>()
  input: any = true
  flyInOutVisibility: string = 'in'
  focus:string

  constructor(private remedysService:RemedysService ) {


     this.remedysService.search(this.searchTerms).subscribe(response =>{
       this.onBlur()
          if(response){
              this.searchResults =  response
              this.input = true
                  if(!response.length){

                      this.input = false
                  }
          }else{
            this.input = true
            this.searchResults = null
          }
      }, err =>{

        this.searchResults = null
      })
  }
  hasNoResponse():boolean{
    return this.input
  }

  ngOnInit() {
  }

  toggleFlyIn(){
    this.flyInOutVisibility = 'in'
  }

  onFocus(){
    this.focus = 'focus'
  }
  onBlur(){
    this.focus = 'hide'
  }

}
