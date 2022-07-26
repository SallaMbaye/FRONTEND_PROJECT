import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '', redirectTo:'catalogue', pathMatch: 'full',}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class ProduitRoutingModule {
 
}
