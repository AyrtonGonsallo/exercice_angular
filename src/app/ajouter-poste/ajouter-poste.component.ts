import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { EnregPostesService } from '../services/enreg-postes.service';

@Component({
  selector: 'app-ajouter-poste',
  templateUrl: './ajouter-poste.component.html',
  styleUrls: ['./ajouter-poste.component.css']
})
export class AjouterPosteComponent implements OnInit {
  @Input() image="";
  poste ={
    id:0,
    image:'',
    comment:''
  }
  getImage(){
    return "..\\..\\assets\\"+this.image+".png"
  }

  constructor(private enreg:EnregPostesService,private router:Router) { }

  ngOnInit(): void {
  }
  ajouterPoste(com:string){
   
    this.poste.id=this.enreg.getId();
    this.poste.image=this.getImage();
    this.poste.comment=com;
    this.enreg.addPoste(this.poste);
    this.router.navigate(['afficherpostes']);
    this.enreg.incId();
  }
}
