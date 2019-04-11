import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../core/services/recipes.service';
import { HeaderRowOutlet } from '@angular/cdk/table';
import { Recipe } from '../core/models/recipe';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  title: string = "";
  description: string = "";
  ingredients: string = "";
  directions: string = "";

  constructor(
    private recipeService: RecipesService
  ) { }

  ngOnInit() {
  }

  addRecipe() {
    // validate data

    var newRecipe = new Recipe();
    newRecipe.title = this.title;
    newRecipe.description = this.description;
    newRecipe.ingredients = this.ingredients.split('\n');
    newRecipe.directions = this.directions.split('\n');
    
    console.log(newRecipe)
    // // api post
    this.recipeService.addRecipe(newRecipe)
			.subscribe(
				recipe => {
          console.log(recipe);
				},
				error => {
					console.log(error);
				});

  }

}
