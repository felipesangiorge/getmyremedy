import {Routes}from'@angular/router'
import {HomeComponent}from'./components/home/home.component'
import {AboutComponent}from'./components/about/about.component'
import{RemedysComponent}from'./components/remedys/remedys.component'

export const ROUTES: Routes=[
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'remedys',component:RemedysComponent}
]
