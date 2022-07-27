import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-itempanier',
  templateUrl: './itempanier.component.html',
  styleUrls: ['./itempanier.component.less']
})
export class ItempanierComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
