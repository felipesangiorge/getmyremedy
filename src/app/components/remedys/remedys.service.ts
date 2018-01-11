import {Injectable}from'@angular/core'
import{Http, Headers, RequestOptions}from'@angular/http'
import{Observable}from'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import{ErrorHandler}from'../../app.error-handler'
import{Remedy}from'./remedy/remedy.model'
import{MenuItem}from'./remedy-details/menu-item/menu-item.model'

import{GMR_API}from'../../app.api'

@Injectable ()

export class RemedysService{

  constructor(private http:Http){}

  remedys():Observable<Remedy[]>{
    return this.http.get(`${GMR_API}/remedys`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  remedyByCategory(id:string):Observable<MenuItem[]>{
    return this.http.get(`${GMR_API}/remedys/${id}/usersRemedys`)
    .map(response =>response.json())
    .catch(ErrorHandler.handleError)
  }

  remedyById(id:string):Observable<Remedy>{
    return this.http.get(`${GMR_API}/remedys/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  commentsOfRemedy(id:string):Observable<any>{
    return this.http.get(`${GMR_API}/remedys/${id}/comments`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  remedyRegisterService(inf:any): Observable<any>{
    const headers = new Headers()
    headers.append('Content-Type','application/json')
    return  this.http.post(`${GMR_API}/usersRemedys`,
      JSON.stringify(inf), new RequestOptions({headers:headers}))
                          .map(response => response.json())
  }

}
