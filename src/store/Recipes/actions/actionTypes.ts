import { IRecipeList } from "../RecipeTypes";

export const GET_RECIPES_START = "GET_RECIPES_START";
export const GET_RECIPES_SUCCESS = "GET_RECIPES_SUCCES";
export const GET_RECIPES_FAILED = "GET_RECIPES_FAILED";

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

export type RecipesActionTypes =
  | GetRecipesStart
  | GetRecipesSucces
  | GetRecipesFailed;
