import { IIngridients } from "../../components/RecipeDetails/RecipeDetails";

export interface IRecipeList {
  [key: string]: IRecipe;
}

export interface IRecipe {
  name: string;
  image: string;
  ingredients: IIngridients;
}
