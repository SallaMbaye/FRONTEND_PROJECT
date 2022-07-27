import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Burger, Menu, Produit } from '../../shared/models/produit.models';

@Component({
  selector: 'blog-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  public location = '' ;

  @Input('produits') produit : Burger|null=null
 
  @Input('menus') menu : Menu|null=null

  constructor(public  _router : Router) { }

  ngOnInit(): void {
    console.log();
  }

}
