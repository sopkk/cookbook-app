import { IRecipe } from "../../store/Recipes/RecipeTypes";

const ValidateRecipe = (recipe: IRecipe): boolean => {
  let valid: boolean = false;

  const validIngredients: boolean[] = Object.keys(recipe.ingredients).map(
    (key: string) => key.trim() !== ""
  );

  valid =
    recipe.name &&
    recipe.name.trim() !== "" &&
    validIngredients.length !== 0 &&
    !validIngredients.includes(false)
      ? true
      : false;

  return valid;
};

export default ValidateRecipe;
