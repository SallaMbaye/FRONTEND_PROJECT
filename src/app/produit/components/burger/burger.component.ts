import { Component, Input, OnInit } from '@angular/core';
import { Burger } from '../../shared/models/produit.models';

@Component({
  selector: 'blog-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.less']
})
export class BurgerComponent implements OnInit {

  @Input('burgers') burger : Burger|null=null

  constructor() { }

  ngOnInit(): void {
  }

}
