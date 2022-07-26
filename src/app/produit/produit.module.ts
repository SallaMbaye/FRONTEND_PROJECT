import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitRoutingModule } from './produit-routing.module';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { DetailsComponent } from './pages/details/details.component';
import { CardComponent } from './components/card/card.component';
import { LayoutModule } from '../layout/layout.module';
import { ProduitService } from './shared/services/produit.services';
import { ListecardComponent } from './components/listecard/listecard.component';
import { PlusmoinsComponent } from './components/plusmoins/plusmoins.component';
import { HeaderphotoComponent } from './components/headerphoto/headerphoto.component';


@NgModule({
  declarations: [
    CatalogueComponent,
    DetailsComponent,
    CardComponent,
    ListecardComponent,
    PlusmoinsComponent,
    HeaderphotoComponent,
   
   
  ],
  imports: [
 
  CommonModule,
  ProduitRoutingModule,
  LayoutModule,

  ],
  
  providers:[
    ProduitService
  ]
  
  ,exports:[
    CardComponent,
    PlusmoinsComponent,
  ]
})
export class ProduitModule { }
