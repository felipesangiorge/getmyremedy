import { Component, OnInit } from '@angular/core';
import {RemedysService}from'../../remedys.service'
import {Observable}from'rxjs/Observable'
import {ActivatedRoute}from'@angular/router'
import{RemedyDetailsComponent}from'../remedy-details.component'

@Component({
  selector: 'gmr-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent implements OnInit {

  comments: Observable<any>


  constructor(private remedysService : RemedysService,
              private route: ActivatedRoute,
              private remedy:RemedyDetailsComponent) { }

  ngOnInit() {
    //this.comments = this.remedysService.commentsOfRemedy(this.route.parent.snapshot.params['id'])
  }


  checkInformations(inf:any ):void{
     var response
     var date = new Date()
     response =  {des_comment:inf.des_comment,
                  des_date: `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`,
                  des_remedy_name: this.remedy.getRemedyName(),
                  des_remedy_dosage:this.remedy.getRemedyDosage(),
                  user_mail:localStorage.getItem("userSessionMailStorage")}

                  console.log(response)

    this.remedysService.commentsOfRemedy(response)
    .subscribe((response: string)=>{


    })



  }

}
