import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() itemOutput = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('WhiteK Recipe', 'Master Recipe', "https://images-na.ssl-images-amazon.com/images/I/718ebRhi9AL.jpg"),
    new Recipe('Another WhiteK Recipe', 'Another Master Recipe', "https://images-na.ssl-images-amazon.com/images/I/718ebRhi9AL.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

  onChoose(event){
    this.itemOutput.emit(event);
  }
}
