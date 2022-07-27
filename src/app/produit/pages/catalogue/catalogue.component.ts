import { Component, Input, OnInit } from '@angular/core';
import { ProduitService } from '../../shared/services/produit.services';
import { Observable, tap } from 'rxjs';
import { Burger, Menu, Produit } from '../../shared/models/produit.models';

@Component({
  selector: 'blog-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.less']
})
export class CatalogueComponent implements OnInit {

  //produits : Catalogue|null=null;
  

  produits$ : Observable<Produit[]> | null = null;
  menus$ : Observable<Menu[]> | null = null;
  burgers$ : Observable<Burger[]> | null = null;
 
  searchText !: string;
 
  constructor(private serv:ProduitService) { }
  ngOnInit(): void {
    this.produits$ = this.serv.all();
    console.log(this.produits$);
    /* this.serv.all().subscribe((data)=>{
      //this.produits$=data;
      
    }) */
    this.menus$ = this.serv.allMenu();

    //console.log(this.menus$);

    this.menus$.pipe(
      tap(console.log)
    ).subscribe(console.log);

 
    this.burgers$ = this.serv.allBurger();
    
    /* this.serv.all().subscribe((data)=>{
      this.menus$=data;
      console.log(this.menus$);
    }) */ 

    

  /* this.produit =this.serv.all(); */


 /*  console.log("azerty");
  console.log(this.serv.all());

  this.serv.all().subscribe((data)=>{
    this.produits=data;
    console.log(this.produits);
  })
  } */
}
}