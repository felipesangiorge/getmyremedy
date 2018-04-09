import { Component, OnInit } from '@angular/core';
import {Subject} from'rxjs/Subject'
import {RemedysService}from'../remedys.service'

@Component({
  selector: 'gmr-remedys-search',
  templateUrl: './remedys-search.component.html'
})
export class RemedysSearchComponent implements OnInit {

  searchResults:Object
  searchTerms= new Subject<string>()
  input: any = true

  constructor(private remedysService:RemedysService ) {


     this.remedysService.search(this.searchTerms).subscribe(response =>{

          if(response){
              this.searchResults =  response
              this.input = true
                  if(!response.length){
                    console.log("vazio")
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

}
