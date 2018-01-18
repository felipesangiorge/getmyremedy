
import {Injectable}from'@angular/core'
import{Http, Headers, RequestOptions}from'@angular/http'
import{Observable}from'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import{ErrorHandler}from'../../app.error-handler'


import{GMR_API}from'../../app.api'

@Injectable ()

export class LoginRegisterService{


constructor(private http:Http){}

loginService(inf:any): Observable<any>{
  const headers = new Headers()
  headers.append('Content-Type','application/json')
  return  this.http.post(`${GMR_API}/api/login`,
    JSON.stringify(inf), new RequestOptions({headers:headers}))
                        .map(response => response.json())
}

}
