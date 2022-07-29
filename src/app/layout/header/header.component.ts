import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {


  data:any;
@Output()
selected: EventEmitter<string> = new EventEmitter<string>();

  @Input() clickBurger: boolean|null=null;
 
  @Output() clickChanged: EventEmitter<string> =   new EventEmitter();

  @Input() count: number=0;

  @Output() countChanged: EventEmitter<number> =   new EventEmitter();
  
  @Output() newClick: EventEmitter<string> =   new EventEmitter();
  



  increment() {

      this.count++;
      
      this.countChanged.emit(this.count);
      
  }
  constructor() { }

  ngOnInit(): void {
    this.data = [
      {"id":1,"name":"Salla"},
      {"id":2,"name":"Seydina"}
    ]
  }

  select(item:any) {
    this.selected.emit(item);
    }

  onClick(a:string){

    this.newClick.emit(a)

  }

  changeBooleen(a:any){

    //alert(a);

    if(a=="burger"){
      
    }

  }


  
}

