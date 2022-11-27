import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bdy-home',
  templateUrl: './bdy-home.component.html',
  styleUrls: ['./bdy-home.component.css']
})
export class BdyHomeComponent {
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
}