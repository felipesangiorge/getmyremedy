
import {Injectable}from'@angular/core'
import{Http, Headers, RequestOptions}from'@angular/http'
import{Observable}from'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/do'
import{ErrorHandler}from'../../app.error-handler'
import{User}from'./user.model'


import{GMR_API}from'../../app.api'

@Injectable ()

export class LoginRegisterService{

  user:User


constructor(private http:Http){}

isLogged(): boolean {
  return this.user !==undefined
}

/*loginService(email:string, password:string): Observable<User>{
  const headers = new Headers()
  headers.append('Content-Type','application/json')
  return  this.http.post<User>(`${GMR_API}/api/login`,
              {des_mail:email,des_password:password})
              .do(user => this.user = user , console.log(this.user))
}*/

loginService(inf:any): Observable<any>{
  const headers = new Headers()
  headers.append('Content-Type','application/json')
  return  this.http.post(`${GMR_API}/api/login`,
    JSON.stringify(inf), new RequestOptions({headers:headers}))
                        .map(response =>  response.json())

}

}
