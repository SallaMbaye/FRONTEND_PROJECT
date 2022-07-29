import { Component, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit.models';

@Component({
  selector: 'blog-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {

  produit:Produit|null=null
  constructor() { }
  ngOnInit(): void {
  }

}
