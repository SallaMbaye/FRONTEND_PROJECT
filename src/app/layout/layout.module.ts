import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { CommandeModule } from '../commande/commande.module';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
  
  CommonModule,
  
  RouterModule,
  
  
  ],
  exports:[
    HeaderComponent,FooterComponent
  ]
})
export class LayoutModule { }
