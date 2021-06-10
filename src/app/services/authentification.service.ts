import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Utilisateur } from '../models/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
  authentifié=false;

  userSubj=new Subject<Utilisateur>();
  private user:Utilisateur|undefined;

  constructor(private router:Router) { }

  signaler(){
    this.userSubj.next(this.user);
  }

  connexion(username:string,pass:string){
    this.user=new Utilisateur();
    this.user.username=username;
    this.user.password=pass;
    this.router.navigate(['connecté']);
    this.signaler();
    this.authentifié=true
  }
  deconnexion(){
    this.user=undefined;
    this.router.navigate(['']);
    this.signaler();
    this.authentifié=false
  }
  getUser(){
    return this.user
  }
  getUserDesc(){
    return this.user?.username
  }
}
