import { IRecipeList, IRecipe } from "../RecipeTypes";

export const GET_RECIPES_START = "GET_RECIPES_START";
export const GET_RECIPES_SUCCESS = "GET_RECIPES_SUCCES";
export const GET_RECIPES_FAILED = "GET_RECIPES_FAILED";

export const ADD_RECIPE_START = "ADD_RECIPE_START";
export const ADD_RECIPE_SUCCES = "ADD_RECIPE_SUCCES";
export const ADD_RECIPE_FAILED = "ADD_RECIPE_FAILED";

interface AddedRecipePayload {
  id: string;
  recipe: IRecipe;
}

export type RecipesActionTypes =
  | GetRecipesStart
  | GetRecipesSucces
  | GetRecipesFailed
  | AddRecipeStart
  | AddRecipeSucces
  | AddRecipeFailed;

export interface GetRecipesStart {
  type: typeof GET_RECIPES_START;
}

export interface GetRecipesSucces {
  type: typeof GET_RECIPES_SUCCESS;
  payload: IRecipeList;
}

export interface GetRecipesFailed {
  type: typeof GET_RECIPES_FAILED;
}

export interface AddRecipeStart {
  type: typeof ADD_RECIPE_START;
}

export interface AddRecipeSucces {
  type: typeof ADD_RECIPE_SUCCES;
  payload: AddedRecipePayload;
}

export interface AddRecipeFailed {
  type: typeof ADD_RECIPE_FAILED;
}
