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

  constructor(private remedysService:RemedysService ) {


     this.remedysService.search(this.searchTerms).subscribe(response =>{

        console.log(response)
        if(response){
          this.searchResults =  response
        }else{
          this.searchResults = null
        }
      }, err =>{
          console.log(err)
        this.searchResults = null
      })
  }

  ngOnInit() {
  }

}
