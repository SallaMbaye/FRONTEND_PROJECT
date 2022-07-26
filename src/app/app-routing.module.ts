import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [

  {path: 'produit', loadChildren: () => import('./produit/produit.module').then(m => m.ProduitModule) }, 
  
  {path: '',redirectTo:"produit",pathMatch:"full"},

  {path: 'securite', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) },
  
  {path: 'commande', loadChildren: () => import('./commande/commande.module').then(m => m.CommandeModule) },
  
  {path: "**",component: NotfoundComponent},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    
    
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
