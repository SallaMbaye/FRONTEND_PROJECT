import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../models/produit.models';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url:string = "http://localhost:4200/produit"

  constructor(private http:HttpClient) { }

  all():Observable<Produit[]> {
    return this.http.get<Produit[]>(this.url)
  }

  produit$ = (id:number) => {
    return this.http.get<Produit>(`${this.url}/${id}`)
  }
}
