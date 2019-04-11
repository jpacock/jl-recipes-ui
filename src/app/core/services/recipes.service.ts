import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private url = 'https://ahwykrn2q6.execute-api.us-west-2.amazonaws.com/dev/recipes'
  constructor(private http: HttpClient) { }

  getRecipes(): Observable<any> {
    return this.http.get<any[]>(this.url)
      .pipe(
        catchError(this.handleError)
      )
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.url, recipe)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    console.log('error')
    if (error.error instanceof ErrorEvent) {
      // errorMsg += "An error occurred:', error.error.message";
    
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // console.error(
      //     `Backend returned code ${error.status}, ` +
      //     `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Error while retrieving shipments');
  };
}
