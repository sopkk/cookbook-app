import { State } from "../reducers/recipesReducer";

const getRecipes = (state: State) => {
  return state.recipes.recipes;
};

export default getRecipes;
