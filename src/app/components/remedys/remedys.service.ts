import {Injectable}from'@angular/core'
import{Http, Headers, RequestOptions}from'@angular/http'
import{Observable}from'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import{ErrorHandler}from'../../app.error-handler'
import{Remedy}from'./remedy/remedy.model'
import{MenuItem}from'./remedy-details/menu-item/menu-item.model'

import{GMR_API}from'../../app.api'

@Injectable ()

export class RemedysService{

  constructor(private http:Http){}


  //Remedy Services:

  remedys():Observable<Remedy[]>{
    return this.http.get(`${GMR_API}/api/remedys/remedysMenu`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  remedyBySameName(id:any):Observable<MenuItem[]>{
    return this.http.get(`${GMR_API}/api/remedys/${id}`)
    .map(response =>response.json())
    .catch(ErrorHandler.handleError)
  }
  remedyByUsers(id:any):Observable<MenuItem[]>{
    return this.http.get(`${GMR_API}/api/users/remedys/${id}`)
    .map(response =>response.json())
    .catch(ErrorHandler.handleError)
  }

  remedyByMenuId(id:string):Observable<Remedy>{
    return this.http.get(`${GMR_API}/api/remedys/remedysMenu/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  getCommentsOfRemedy(id:string):Observable<any>{
    return this.http.get(`${GMR_API}/api/remedys/${id}/comments`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  setCommentsOfRemedy(inf):Observable<any>{
    const headers = new Headers
    headers.append('Content-Type','application/json')
    headers.set('Authorization',`Bearer ${localStorage.getItem("userSessionTokenStorage")}`)
    return this.http.post(`${GMR_API}/api/remedys/comments`,
      JSON.stringify(inf), new RequestOptions({headers:headers}))
                          .map(response => response.json())

  }

  remedyRegisterService(inf:any): Observable<any>{
    const headers = new Headers()
    headers.append('Content-Type','application/json')
    headers.set('Authorization',`Bearer ${localStorage.getItem("userSessionTokenStorage")}`)
    return  this.http.post(`${GMR_API}/api/remedys/registerNewRemedy`,
      JSON.stringify(inf), new RequestOptions({headers:headers}))
                          .map(response => response.json())

  }


}
