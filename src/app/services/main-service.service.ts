import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  postSubject =new Subject<any[]>();
  private posts=[
    {
      id:0,
      titre:'titre par defaut',
      contenu:'commentaire par defaut',
      dateheure:'date par defaut: 12/07/2000 a 9h00'
    }
  ]
  constructor() { }
  getPosts(){
    return this.posts;
  }
  addPost(post:any){
    this.posts.push(post)
    this.signaler();
  }
  signaler(){
    this.postSubject.next(this.posts.slice())
  }
  delete(post:any){
      let temp=this.posts;
      this.posts=temp.filter(p => p.dateheure != post.dateheure);
      console.log(this.posts)
      this.signaler();
    
  }
}
