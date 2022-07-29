import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Catalogue } from '../models/catalogue.models';


@Injectable({

  providedIn: 'root'

})
export class CatalogueService {

  private url:string = "http://localhost:8000/api/catalogues"

  constructor(private http:HttpClient) {}

  all():Observable<Catalogue>{

    return this.http.get<Catalogue>(this.url)

  }

  getCatalogue():Observable<Catalogue> {

    return this.http.get<Catalogue>(this.url).pipe(

      //tap(console.log))
      map(

        data => {

            data.produits = [...data.burgers,...data.menus]

            console.log(data.produits)

            return data

        }))
    
    
  }

  

}
