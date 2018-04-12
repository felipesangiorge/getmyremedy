
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

logout(){
  localStorage.removeItem('userSessionMailStorage')
  localStorage.removeItem('userSessionTokenStorage')
  localStorage.removeItem('userSessionNameStorage')

}

handleLogin(){

  this.router.navigate(['/login'])
}

getAllStates(): Observable<any>{
  return this.http.get(`${GMR_API}/api/informations/allstates`)
  .map(response =>response.json())
  .catch(ErrorHandler.handleError)
}

getCityByState(id:any): Observable<any>{
  return this.http.get(`${GMR_API}/api/informations/city/${id}`)
  .map(response =>response.json())
  .catch(ErrorHandler.handleError)
}

verifyToken(): Observable<any>{
  const headers = new Headers()
  headers.append('Content-Type','application/json')
  headers.append('Authorization',`Bearer ${localStorage.getItem("userSessionTokenStorage")}`)
  return this.http.post(`${GMR_API}/api/users/verifyToken`, new RequestOptions({headers:headers}))
          .map(response => response.json())
}

loginService(inf:any): Observable<any>{
  const headers = new Headers()
  headers.append('Content-Type','application/json')
  return  this.http.post(`${GMR_API}/api/login`,
    JSON.stringify(inf), new RequestOptions({headers:headers}))
                        .map(response =>  response.json())
}

forgotPassword(inf:any): Observable<any>{
  const headers = new Headers()
  headers.append('Content-Type','application/json')
  return this.http.post(`${GMR_API}/api/login/forgotPassword`,
    JSON.stringify(inf),new RequestOptions({headers:headers}))
                        .map(response => response.json())
}

registerNewUser(inf:any): Observable<any>{
  const headers = new Headers()
  headers.append('Content-Type','application/json')
  return this.http.post(`${GMR_API}/api/register`,
          JSON.stringify(inf), new RequestOptions({headers:headers}))
          .map(response => response.json())
}

editUser(inf:any): Observable<any>{
  const headers = new Headers()
  headers.append('Content-Type','application/json')
  headers.set('Authorization',`Bearer ${localStorage.getItem("userSessionTokenStorage")}`)
  return this.http.post(`${GMR_API}/api/users/edit`,
          JSON.stringify(inf), new RequestOptions({headers:headers}))
          .map(response => response.json())
}

getUser(id:any):Observable<any>{
  return this.http.get(`${GMR_API}/api/users/${id}`)
  .map(response =>response.json())
  .catch(ErrorHandler.handleError)
}

}
