import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Utilisateur } from '../models/utilisateur.model';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm:FormGroup;
  constructor(private a:AuthentificationService,private formBuilder:FormBuilder) {
    this.userForm=this.formBuilder.group(
      {
        username:['',Validators.required],
        password:['',[Validators.required,Validators.minLength(8)]]
      }
    )
   }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.userForm=this.formBuilder.group(
      {
        username:['',Validators.required],
        password:['',[Validators.required,Validators.minLength(8)]]
      }
    )
  }
  onSubmitForm(){
    const formValue=this.userForm?.value;
    this.a.connexion(formValue['username'],formValue['password']);
  }
}
