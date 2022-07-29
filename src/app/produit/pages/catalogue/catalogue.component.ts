import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CatalogueService } from '../../shared/services/catalogue.service';
import { Catalogue } from '../../shared/models/catalogue.models';
import { Produit } from '../../shared/models/produit.models';

@Component({
  selector: 'blog-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.less']
})
export class CatalogueComponent implements OnInit {

  
  //Etudier la structure de la page : Détécter toutes ses données
  //Creer un dto dans le back
  //Creer un model dans le front 
  //Creer un loader pour l'observable
  //Query String
  //Retourner json ld (hydra item)
  //input(parent=>enfant)

  
  
  catalogue$:Observable<Catalogue>|null=null

  catalogue:Catalogue|null=null

  Counter :boolean|null|undefined=null

  lignoubeuss : string = "";

  val : any

  value:any;

  @Output() youbboulLignouBeussValeuram : EventEmitter<string> = new EventEmitter

  constructor(private serv:CatalogueService) {}

  ngOnInit(): void {
    

    //this.serv.getCatalogue().subscribe((data) => this.catalogue = data)
    this.catalogue$= this.serv.getCatalogue();
    this.serv.getCatalogue().subscribe((data) => this.catalogue = data)

  /*  this.catalogue$.pipe(
      tap(console.log)
    ).subscribe(console.log)
    }  */

  

  /* onClick(){
    console.log("cliqué")
  }
   */
 
  /* clickChangedHandler(count: boolean) {
    
    this.Counter = count;
    
  } */


  

}
catClicked(salla:string){

  this.value=salla;
  
  console.log(this.value)

}
changeBooleen(content : string) {
  this.youbboulLignouBeussValeuram.emit(content)
}


getProduit(i:number,typep:string,c:any){

}

itemSelected(e:any){
  this.value = e;
  
  }


onClicked(e:any){

  /* this.val = e;
  console.log(this.val) */

}





}

