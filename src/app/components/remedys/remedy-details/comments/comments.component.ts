import { Component, OnInit } from '@angular/core';
import {RemedysService}from'../../remedys.service'
import {Observable}from'rxjs/Observable'
import {ActivatedRoute}from'@angular/router'

@Component({
  selector: 'gmr-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent implements OnInit {

  comments: Observable<any>
  constructor(private remedysService : RemedysService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.comments = this.remedysService.commentsOfRemedy(this.route.parent.snapshot.params['id'])
  }

}
