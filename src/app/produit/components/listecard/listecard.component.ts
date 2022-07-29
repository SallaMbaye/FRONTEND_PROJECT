import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit.models';

@Component({
  selector: 'blog-listecard',
  templateUrl: './listecard.component.html',
  styleUrls: ['./listecard.component.less']
})
export class ListecardComponent implements OnInit {

  @Input('prod')  produits:Produit[]|undefined=[]
  content : string = "bongo"
  constructor() {}
  ngOnInit(): void {
  }
  
}
