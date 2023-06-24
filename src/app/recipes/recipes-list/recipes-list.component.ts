import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes: Recipe[] = 
  [
    new Recipe('Chicken tender', 'Tasty chicken tender', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('Roasted Chicken', 'Tasty roasted chicken', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
  ]
}
