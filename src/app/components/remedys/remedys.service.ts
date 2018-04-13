import {Injectable}from'@angular/core'
import{Http, Headers, RequestOptions}from'@angular/http'
import{Observable}from'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'
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

  searchEntries(term){
     if(term.length){
      return this.http.get(`${GMR_API}/api/remedys/search/remedyMenu/${term}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
    }else{
      return Array.of(term)
    }
  }

  search(terms: Observable<string>){
    return terms.debounceTime(400)
    .distinctUntilChanged()
    .switchMap(term => this.searchEntries(term))
  }

  remedyBySameName(id:any):Observable<MenuItem[]>{
    return this.http.get(`${GMR_API}/api/remedys/${id}`)
    .map(response =>response.json())
    .catch(ErrorHandler.handleError)
  }

  remedyBySameNameAndCity(id:any,city:any):Observable<MenuItem[]>{
    return this.http.get(`${GMR_API}/api/remedysByCity/${id}&${city}`)
    .map(response =>response.json())
    .catch(ErrorHandler.handleError)
  }

  remedyMenuByCategory(id:any):Observable<any>{
    return this.http.get(`${GMR_API}/api/remedys/remedysMenu/category/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  remedyByUsers(id:any):Observable<MenuItem[]>{
    return this.http.get(`${GMR_API}/api/users/remedys/${id}`)
    .map(response =>response.json())
    .catch(ErrorHandler.handleError)
  }

  deleteUserRemedy(obj:any):Observable<MenuItem[]>{
    const headers = new Headers
    headers.append('Content-Type','application/json')
    headers.set('Authorization',`Bearer ${localStorage.getItem("userSessionTokenStorage")}`)
    return this.http.delete(`${GMR_API}/api/users/remedys/${obj.idtb_remedys}`,new RequestOptions({headers:headers}))
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
