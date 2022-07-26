import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { CreationComponent } from './pages/creation/creation.component';


const routes: Routes = [
  {path:'creation',component:CreationComponent},
  {path:'connexion',component:ConnexionComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]
})
export class SecuriteRoutingModule { }
