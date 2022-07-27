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
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BurgerComponent } from './components/burger/burger.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CatalogueComponent,
    DetailsComponent,
    CardComponent,
    ListecardComponent,
    PlusmoinsComponent,
    HeaderphotoComponent,
    BurgerComponent,
    MenuComponent
  ],
  imports: [
  CommonModule,
  ProduitRoutingModule,
  LayoutModule,
  FormsModule,
  HttpClientModule,
  Ng2SearchPipeModule
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
