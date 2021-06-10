import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnregPostesService {
  id=1;
  getId(){
    return this.id
  }
  incId(){
    this.id++
  }
postSubject =new Subject<any[]>();
  private postes:any[]=[
    
  ]
  constructor() { }
  getPostes(){
    return this.postes;
  }
  addPoste(poste:any){
    this.postes.push(poste)
    this.signaler();
  }
  signaler(){
    this.postSubject.next(this.postes.slice())
  }
  delete(post:any){
      let temp=this.postes;
      this.postes=temp.filter(p => p.image != post.image);
      console.log(this.postes)
      this.signaler();
    
  }
}
