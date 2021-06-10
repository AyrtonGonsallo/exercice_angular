import { Component, Input, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-nouveau-comment',
  templateUrl: './nouveau-comment.component.html',
  styleUrls: ['./nouveau-comment.component.css']
})
export class NouveauCommentComponent implements OnInit {
  @Input() idparent=0;
  post={
    id:0,
    titre:'',
    contenu:'',
    dateheure:''
  };
  constructor(private s:MainServiceService,private a:AuthentificationService) { }

  ngOnInit(): void {
  }
  addPost(t:string,c:string){
    var currentdate = new Date(); 
    this.post.id=this.idparent;
    this.post.dateheure = "Posté le: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " a "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds()+" par: "+this.a.getUserDesc();
    this.post.titre=t;
    this.post.contenu=c;
    this.s.addPost(this.post)
    console.log(this.s.getPosts())
    
  }

}
