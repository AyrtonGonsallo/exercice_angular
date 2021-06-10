import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherPostComponent } from './afficher-comment/afficher-comment.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NouveauCommentComponent } from './nouveau-comment/nouveau-comment.component';
import { AfficherPosteComponent } from './afficher-poste/afficher-poste.component';
import { AjouterPosteComponent } from './ajouter-poste/ajouter-poste.component';
import { E404Component } from './e404/e404.component';
import { Authguard } from './services/authguard.service';

const routes: Routes = [
  {
    path:'ajouterposte',
    canActivate:[Authguard],
    component:AjouterPosteComponent
  },
  {
    path:'afficherpostes',
    canActivate:[Authguard],
    component:AfficherPosteComponent
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'connecté',
    canActivate:[Authguard],
    component:MainComponent
  },
  {
    path:'not-found',
    component:E404Component
  },
  {
    path:'**',
    redirectTo:'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
