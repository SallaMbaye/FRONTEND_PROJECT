import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { DetailcommandeComponent } from './pages/detailcommande/detailcommande.component';
import { PanierComponent } from './pages/panier/panier.component';


const routes: Routes = [
  {path:'panier',component:PanierComponent},
  {path:'commandes',component:CommandesComponent},
  {path:'detailcommande',component:DetailcommandeComponent},
  {path:'details',component:DetailcommandeComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 
exports: [RouterModule]
})
export class CommandeRoutingModule { }
