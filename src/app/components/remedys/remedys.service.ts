import {Injectable}from'@angular/core'
import{Http}from'@angular/http'
import{Observable}from'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import{ErrorHandler}from'../../app.error-handler'
import{Remedy}from'./remedy/remedy.model'

import{GMR_API}from'../../app.api'

@Injectable ()

export class RemedysService{

  constructor(private http:Http){}

  remedys():Observable<Remedy[]>{
    return this.http.get(`${GMR_API}/remedys`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  remedyById(id:string):Observable<Remedy>{
    return this.http.get(`${GMR_API}/remedys/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

}
