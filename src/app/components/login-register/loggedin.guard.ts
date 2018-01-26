import {CanLoad,CanActivate, Route}from'@angular/router'
import {Injectable}from'@angular/core'
import {LoginRegisterService}from'./login-register.service'


@Injectable()
export class LoggedInGuard implements CanActivate{

  constructor(private loginRegisterService : LoginRegisterService){

  }

  canActivate():boolean{
    const loggedIn = this.loginRegisterService.isLogged()
    if(!loggedIn){
      this.loginRegisterService.handleLogin()
      
    }
    return loggedIn
  }

}
