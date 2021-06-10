import { Component, OnInit,Input } from '@angular/core';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class PostComponent implements OnInit {
  @Input() idparent=0;
  @Input() titre='';
  @Input()contenu=''
  @Input()dateheure=''
  post:any;
  constructor(private s:MainServiceService) { }
  ngOnInit(): void {
    
  }
  supprimer(){
    this.post={
      titre:this.titre,
      contenu:this.contenu,
      dateheure:this.dateheure
    }
    this.s.delete(this.post);
  }

}
