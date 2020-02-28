import { IRecipeList, IRecipe } from "../RecipeTypes";

export const GET_RECIPES_START = "GET_RECIPES_START";
export const GET_RECIPES_SUCCESS = "GET_RECIPES_SUCCES";
export const GET_RECIPES_FAILED = "GET_RECIPES_FAILED";

export const ADD_RECIPE_START = "ADD_RECIPE_START";
export const ADD_RECIPE_SUCCES = "ADD_RECIPE_SUCCES";
export const ADD_RECIPE_FAILED = "ADD_RECIPE_FAILED";

export const DELETE_RECIPE_START = "DELETE_RECIPE_START";
export const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
export const DELETE_RECIPE_FAILED = "DELETE_RECIPE_FAILED";

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
  | AddRecipeFailed
  | DeleteRecipeStart
  | DeleteRecipeSuccess
  | DeleteRecipeFailed;

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

export interface DeleteRecipeStart {
  type: typeof DELETE_RECIPE_START;
  payload: string;
}

export interface DeleteRecipeSuccess {
  type: typeof DELETE_RECIPE_SUCCESS;
  payload: string;
}

export interface DeleteRecipeFailed {
  type: typeof DELETE_RECIPE_FAILED;
}
