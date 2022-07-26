import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandeModule } from './commande/commande.module';
import { LayoutModule } from './layout/layout.module';
import { NotfoundComponent } from './notfound/notfound.component';




@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  LayoutModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
