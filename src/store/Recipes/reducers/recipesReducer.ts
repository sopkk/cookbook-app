import { IRecipeList } from "../RecipeTypes";
import * as actionTypes from "../actions/actionTypes";

export interface State {
  recipes: IRecipeList;
}

const initialState: State = {
  recipes: {}
};

const recipesReducer = (
  state = initialState,
  action: actionTypes.RecipesActionTypes
): State => {
  switch (action.type) {
    case actionTypes.GET_RECIPES_START:
      return state;
    case actionTypes.GET_RECIPES_SUCCESS:
      return { ...state, recipes: action.payload };
    case actionTypes.GET_RECIPES_FAILED:
      console.log("failed");
      return state;
    default:
      return state;
  }
};

export default recipesReducer;
