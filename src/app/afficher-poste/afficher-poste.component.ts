import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EnregPostesService } from '../services/enreg-postes.service';

@Component({
  selector: 'app-afficher-poste',
  templateUrl: './afficher-poste.component.html',
  styleUrls: ['./afficher-poste.component.css']
})
export class AfficherPosteComponent implements OnInit {
  id=0;
  image="";
  description="";
  totalC="";
  subscription:Subscription|undefined;
  constructor(private enreg:EnregPostesService) { }

  postes:any[]| undefined;
  ngOnInit(): void {
    //this.posts=this.s.getPosts();
    this.subscription=this.enreg.postSubject.subscribe(
      (postes:any[])=>{
        this.postes=postes;
      }
    );
    this.enreg.signaler();
      
}
}
