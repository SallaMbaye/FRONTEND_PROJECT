import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { CommandeModule } from '../commande/commande.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
  
  CommonModule,
  FormsModule,
  Ng2SearchPipeModule ,
  RouterModule,
  
  
  ],
  exports:[
    HeaderComponent,FooterComponent
  ]
})
export class LayoutModule { }
