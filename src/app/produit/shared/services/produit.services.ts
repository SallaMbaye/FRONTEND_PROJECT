import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Burger, Catalogue, Menu, Produit } from '../models/produit.models';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  //private url:string = "http://localhost:8000/api/catalogues"
  private url:string = "http://localhost:3000/produits"
  private urlburger:string="http://localhost:3000/burgers"
  private urlmenu:string="http://localhost:3000/menus"


  constructor(private http:HttpClient) { }

  /* all():Observable<Catalogue | null > {
    return this.http.get<Catalogue>(this.url);
  } */


  all():Observable<Produit[]> {
    return this.http.get<Produit[]>(this.url)
  } 

  allBurger():Observable<Burger[]> {
    return this.http.get<Burger[]>(this.urlburger)
  } 
  allMenu():Observable<Menu[]> {
    return this.http.get<Menu[]>(this.urlmenu)
  }  

  /* getOneBurger (id:number) {
    return this.http.get<Burger>(`${this.urlburger}/${id}`)
  }
  getOneMenu (id:number) {
    return this.http.get<Menu>(`${this.urlmenu}/${id}`)
  } */
  /* produit$ = (id:number) => {
    return this.http.get<Produit>(`${this.url}/${id}`)
  } */
}
