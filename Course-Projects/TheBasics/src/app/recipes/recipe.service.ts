import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'WhiteK Recipe',
      'Master Recipe',
      'https://images-na.ssl-images-amazon.com/images/I/718ebRhi9AL.jpg',
      [ new Ingredient('meat', 1),
        new Ingredient('chicken', 1)
      ]),
    new Recipe(
      'Another WhiteK Recipe',
      'Another Master Recipe',
      'https://images-na.ssl-images-amazon.com/images/I/718ebRhi9AL.jpg',
      [ new Ingredient('meat', 2),
        new Ingredient('chicken', 2)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
