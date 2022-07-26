import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent  implements OnInit{
  title = 'Integration Maquette';

  public location = '' ;

  constructor(public  _router : Router) 
  {      
   this.location = _router.url;
  }
  ngOnInit(): void {

  }
}
