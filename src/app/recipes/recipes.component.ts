import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../core/services/recipes.service'
import { Recipe } from '../core/models/recipe'
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe;

  constructor(
    private recipeService: RecipesService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(
        recipes => {
          console.log(recipes)
          this.recipes = recipes;
          this.recipes.ingredients = recipes.ingredients;
        },
        error => {
          console.log('Could not load recipes')
        });
  }


}
