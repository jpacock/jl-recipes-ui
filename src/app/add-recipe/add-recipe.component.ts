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

  title: String = "";
  description: String = "";
  ingredients: String = "";
  directions: String = "";

  constructor(
    private recipeService: RecipesService
  ) { }

  ngOnInit() {
  }

  addRecipe() {
    console.log(this.title)
    // validate data

    // Recipe newRecipe = new Recipe()

    // // api post
    // this.recipeService.addRecipe()
  }

}
