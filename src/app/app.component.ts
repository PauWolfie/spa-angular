import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  text:string = 'Un gran poder conlleva una gran responsabilidad.'
  author:string = 'Bob Parker'
  show:boolean = true;

  title = 'test-web';
}