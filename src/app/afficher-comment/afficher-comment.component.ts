import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-afficher-comment',
  templateUrl: './afficher-comment.component.html',
  styleUrls: ['./afficher-comment.component.css']
})
export class AfficherPostComponent implements OnInit {

  @Input() idparent=0;

  subscription:Subscription|undefined;
  constructor(private s:MainServiceService) { }

  posts:any[]| undefined;
  ngOnInit(): void {
    //this.posts=this.s.getPosts();
    this.subscription=this.s.postSubject.subscribe(
      (posts:any[])=>{
        this.posts=posts;
      }
    );
    this.s.signaler();
  }

}
