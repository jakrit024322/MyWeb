import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-jakrit';
  parentCount = 0;

  addparentCount(){
    this.parentCount++;
  }
 
  clearInParent(val : any){
    this.parentCount = val;
  }
}
