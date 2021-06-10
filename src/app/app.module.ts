import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NouveauCommentComponent } from './nouveau-comment/nouveau-comment.component';
import { AfficherPostComponent } from './afficher-comment/afficher-comment.component';
import {MainServiceService} from './services/main-service.service';
import {AuthentificationService} from './services/authentification.service';
import { PostComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AfficherPosteComponent } from './afficher-poste/afficher-poste.component';
import { AjouterPosteComponent } from './ajouter-poste/ajouter-poste.component'
import { FormsModule } from '@angular/forms'
import { EnregPostesService } from './services/enreg-postes.service';
import { PosteComponent } from './poste/poste.component';
import { E404Component } from './e404/e404.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NouveauCommentComponent,
    AfficherPostComponent,
    PostComponent,
    LoginComponent,
    MainComponent,
    AfficherPosteComponent,
    AjouterPosteComponent,
    PosteComponent,
    E404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MainServiceService,
    AuthentificationService,
    EnregPostesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
