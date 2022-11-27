import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private route:Router){ }

  text:string = 'Un gran poder conlleva una gran responsabilidad.'
  author:string = 'Bob Parker'
  show:boolean = true;

  title = 'test-web';

  changeCbbs(){
    console.log("Changing to Cbbs display");
    this.route.navigate(['/cbbs']);
  }

  changeQuick(){
    console.log("Changing to Quick Display");
    this.route.navigate(['/quick']);    
  }

  changeHome(){
    console.log("Changing to Quick Display");
    this.route.navigate(['/']);  
  }
}
