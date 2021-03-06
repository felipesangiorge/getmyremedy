import {Routes}from'@angular/router'
import {HomeComponent}from'./components/home/home.component'
import {AboutComponent}from'./components/about/about.component'
import{RemedysComponent}from'./components/remedys/remedys.component'
import{RemedyDetailsComponent}from'./components/remedys/remedy-details/remedy-details.component'
import{MenuComponent}from'./components/remedys/remedy-details/menu/menu.component'
import{CommentsComponent}from'./components/remedys/remedy-details/comments/comments.component'
import{RemedyRegisterComponent}from'./components/remedy-register/remedy-register.component'
import{LoginComponent}from'./components/login-register/login/login.component'
import{LoginRegisterComponent}from'./components/login-register/login-register.component'
import{LoggedInGuard}from'./components/login-register/loggedin.guard'
import{UsersComponent}from'./components/users/users.component'
import{ForgotPasswordComponent}from'./components/login-register/forgot-password/forgot-password.component'


export const ROUTES: Routes=[
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'login',component:LoginComponent},
    {path:'user',component:UsersComponent},
    {path:'register',component:LoginRegisterComponent},
    {path:'forgot-password',component:ForgotPasswordComponent},
    {path:'remedys',component:RemedysComponent},
    {path:'remedys/:id',component:RemedyDetailsComponent,children:[
      {path:'',redirectTo:'menu',pathMatch:'full'},
      {path:'menu',component:MenuComponent},
      {path:'comments',component:CommentsComponent}
    ]},
    {path:'remedy-register',component: RemedyRegisterComponent,canActivate:[LoggedInGuard]}

]
