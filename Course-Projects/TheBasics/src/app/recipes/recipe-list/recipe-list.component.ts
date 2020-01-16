import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('WhiteK Recipe', 'Master Recipe', "https://images-na.ssl-images-amazon.com/images/I/718ebRhi9AL.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
