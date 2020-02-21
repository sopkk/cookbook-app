import { IRecipeList, IRecipe } from "../RecipeTypes";
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
      return state;
    case actionTypes.ADD_RECIPE_START:
      return state;
    case actionTypes.ADD_RECIPE_SUCCES:
      const newRecipe: IRecipe = action.payload.recipe;
      const id: string = action.payload.id;
      const updatedRecipes: IRecipeList = { ...state.recipes, [id]: newRecipe };
      console.log("new recipes: ", updatedRecipes);
      return { ...state, recipes: updatedRecipes };
    case actionTypes.ADD_RECIPE_FAILED:
      return state;
    default:
      return state;
  }
};

export default recipesReducer;
