import { Dispatch } from "redux";
import axios from "axios";

import * as actionTypes from "./actionTypes";
import { IRecipeList, IRecipe } from "../RecipeTypes";

const BASE_URL = "https://cookbook-app-c2859.firebaseio.com";

export const getRecipes = () => {
  return (dispatch: Dispatch<actionTypes.RecipesActionTypes>) => {
    dispatch(getRecipesStart());
    axios
      .get(`${BASE_URL}/recipes.json`)
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
      .post(`${BASE_URL}/recipes.json`, recipe)
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

export const deleteRecipe = (id: string) => {
  return (dispatch: Dispatch<actionTypes.RecipesActionTypes>) => {
    dispatch(deleteRecipeStart(id));
    axios
      .delete(`${BASE_URL}/recipes/${id}.json`)
      .then(response => {
        console.log("id: ", id, ", resp: ", response.data);
        dispatch(deleteRecipeSuccess(id));
      })
      .catch((error: Error) => {
        dispatch(deleteRecipeFailed());
      });
  };
};

const deleteRecipeStart = (id: string): actionTypes.DeleteRecipeStart => ({
  type: actionTypes.DELETE_RECIPE_START,
  payload: id
});

const deleteRecipeSuccess = (id: string): actionTypes.DeleteRecipeSuccess => ({
  type: actionTypes.DELETE_RECIPE_SUCCESS,
  payload: id
});

const deleteRecipeFailed = (): actionTypes.DeleteRecipeFailed => ({
  type: actionTypes.DELETE_RECIPE_FAILED
});
