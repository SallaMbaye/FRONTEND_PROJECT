import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { PanierComponent } from './pages/panier/panier.component';
import { LayoutModule } from '../layout/layout.module';
import { ItempanierComponent } from './components/itempanier/itempanier.component';
import { ProduitModule } from '../produit/produit.module';

import { DetailcommandeComponent } from './pages/detailcommande/detailcommande.component';


@NgModule({
  declarations: [
    PanierComponent,
    
    ItempanierComponent,
    
    DetailcommandeComponent,
    

  ],
  imports: [
 
  CommonModule,
  CommandeRoutingModule,
  LayoutModule,
    ProduitModule
  ],
  exports:[
    PanierComponent,
    

  ]
})
export class CommandeModule { }
