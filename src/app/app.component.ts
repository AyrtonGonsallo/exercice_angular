import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Utilisateur } from './models/utilisateur.model';
import { AuthentificationService } from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Exercice';
  subs:Subscription|undefined;
  user:Utilisateur|undefined;
  constructor(private a:AuthentificationService){

  }
  ngOnInit(){
    //this.user=this.a.getUser();
    this.subs=this.a.userSubj.subscribe(
      y=>this.user=y
    );
    this.a.signaler();
  }
  logout(){
    this.a.deconnexion();
  }
}
