import { Component, Input, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Menu, Produit } from '../../shared/models/produit.models';
import { ProduitService } from '../../shared/services/produit.services';

@Component({
  selector: 'blog-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  produits=[
    { 
      "id": 1,
      "nom": "Brasil Fromage Burger",
      "image":"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
      "prix":5000},
  { 
      "id": 2,
      "nom": "Brasil Fromage Burger",
      "image":"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
      "prix":5000
  },
  { 
      "id": 3,
      "nom": "Brasil Fromage Burger",
      "image":"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
      "prix":5000
  },
  { 
      "id": 4,
      "nom": "Brasil Fromage Burger",
      "image":"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
      "prix":5000
  },{ 
      "id": 5,
      "nom": "Menu Brasil Burger",
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyO1TZk6dEk7yS3CRrKTDzID6GQi6uglnU8Q&usqp=CAU",
      "prix":5000
  },
  { 
      "id": 6,
      "nom": "Menu Brasil Burger",
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyO1TZk6dEk7yS3CRrKTDzID6GQi6uglnU8Q&usqp=CAU",
      
      "prix":5000
  },
  { 
      "id": 7,
      "nom": "Menu Brasil Burger",
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyO1TZk6dEk7yS3CRrKTDzID6GQi6uglnU8Q&usqp=CAU",
      
      "prix":5000
  },
  { 
      "id": 8,
      "nom": "Menu Brasil Burger",
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyO1TZk6dEk7yS3CRrKTDzID6GQi6uglnU8Q&usqp=CAU",
      "prix":5000
  }
  ]

  constructor(private serv:ProduitService) { }

  

  ngOnInit(): void {
    /* this.produits$ = this.serv.all();
    
    this.produits$.pipe(
      tap(console.log)
    ).subscribe(console.log);
  } */

}

}
