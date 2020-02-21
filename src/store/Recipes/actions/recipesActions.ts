import { Dispatch } from "redux";
import axios from "axios";

import * as actionTypes from "./actionTypes";
import { IRecipeList, IRecipe } from "../RecipeTypes";

const RECIPES_URL = "https://cookbook-app-c2859.firebaseio.com/recipes.json";

export const getRecipes = () => {
  return (dispatch: Dispatch<actionTypes.RecipesActionTypes>) => {
    dispatch(getRecipesStart());
    axios
      .get(RECIPES_URL)
      .then(resp => {
        dispatch(getRecipesSucces(resp.data));
      })
      .catch(e => {
        dispatch(getRecipesFailed());
      });
  };
};

const getRecipesStart = (): actionTypes.RecipesActionTypes => ({
  type: actionTypes.GET_RECIPES_START
});

const getRecipesSucces = (
  payload: IRecipeList
): actionTypes.RecipesActionTypes => ({
  type: actionTypes.GET_RECIPES_SUCCESS,
  payload: payload
});

const getRecipesFailed = (): actionTypes.RecipesActionTypes => ({
  type: actionTypes.GET_RECIPES_FAILED
});

export const addRecipe = (recipe: IRecipe) => {
  return (dispatch: Dispatch<actionTypes.RecipesActionTypes>) => {
    dispatch(addRecipeStart());
    axios
      .post(RECIPES_URL, recipe)
      .then(response => {
        dispatch(addRecipeSuccess(recipe, response.data.name));
      })
      .catch((error: Error) => {
        console.log("failed to post: ", error.message);
        dispatch(addRecipeFailed());
      });
  };
};

const addRecipeStart = (): actionTypes.AddRecipeStart => ({
  type: actionTypes.ADD_RECIPE_START
});

const addRecipeSuccess = (
  recipe: IRecipe,
  id: string
): actionTypes.AddRecipeSucces => ({
  type: actionTypes.ADD_RECIPE_SUCCES,
  payload: {
    recipe: recipe,
    id: id
  }
});

const addRecipeFailed = (): actionTypes.AddRecipeFailed => ({
  type: actionTypes.ADD_RECIPE_FAILED
});
