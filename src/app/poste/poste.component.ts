import { Component, OnInit,Input } from '@angular/core';
import { EnregPostesService } from '../services/enreg-postes.service';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})
export class PosteComponent implements OnInit {

  @Input() id=0;
  @Input() image="";
  @Input() description="";
  @Input() totalC="";
  constructor(private enreg:EnregPostesService) { }

  ngOnInit(): void {
    
  }
}
