import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../shared/models/produit.models';

@Component({
  selector: 'blog-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  @Input('menus') menu : Menu|null=null


  constructor() { }

  ngOnInit(): void {
  }

}
