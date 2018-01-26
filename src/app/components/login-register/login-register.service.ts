
import {Injectable}from'@angular/core'
import{Http, Headers, RequestOptions}from'@angular/http'
import{Observable}from'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/do'
import{ErrorHandler}from'../../app.error-handler'
import{User}from'./user.model'
import{Router}from'@angular/router'
import{ToastsManager}from'ng2-toastr/ng2-toastr';



import{GMR_API}from'../../app.api'

@Injectable ()

export class LoginRegisterService{

  user:User


constructor(private http:Http, private router:Router){

}

isLogged(): boolean {
  if(localStorage.getItem("userSessionMailStorage") != null || localStorage.getItem("userSessionTokenStorage") != null){
    return true
  }else{
    return false
  }
}
handleLogin(){

  this.router.navigate(['/login'])
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

registerNewUser(inf:any): Observable<any>{
  const headers = new Headers()
  headers.append('Content-Type','application/json')
  return this.http.post(`${GMR_API}/api/register`,
          JSON.stringify(inf), new RequestOptions({headers:headers}))
          .map(response => response.json())
}

}
