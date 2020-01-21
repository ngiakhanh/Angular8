import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
isRecipe = true;
  onNavigation(navigation: string){
    if (navigation === 'recipe') {
      this.isRecipe = true;
    } else{
      this.isRecipe = false;
    }
  }
}
