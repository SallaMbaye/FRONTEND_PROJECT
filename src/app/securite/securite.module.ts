import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuriteRoutingModule } from './securite-routing.module';
import { CreationComponent } from './pages/creation/creation.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { RouterModule } from '@angular/router';
import { CommandeModule } from '../commande/commande.module';



@NgModule({
  declarations: [
    CreationComponent,
    ConnexionComponent
  ],
  imports: [

  CommonModule,
    SecuriteRoutingModule,
    RouterModule,
  
  ]
})
export class SecuriteModule { }
