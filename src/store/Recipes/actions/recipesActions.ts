import { Dispatch } from "redux";
import axios from "axios";

import * as actionTypes from "./actionTypes";
import { IRecipeList } from "../RecipeTypes";

const GET_RECIPES_URL =
  "https://cookbook-app-c2859.firebaseio.com/recipes.json";

export const getRecipes = () => {
  return (dispatch: Dispatch<actionTypes.RecipesActionTypes>) => {
    dispatch(getRecipesStart());
    axios
      .get(GET_RECIPES_URL)
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
