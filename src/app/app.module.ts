import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
  LayoutModule,
  HttpClientModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
