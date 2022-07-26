import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-listecard',
  templateUrl: './listecard.component.html',
  styleUrls: ['./listecard.component.less']
})
export class ListecardComponent implements OnInit {

  @Input()
  url !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
