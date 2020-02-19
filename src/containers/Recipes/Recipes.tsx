import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as recipesActions from "../../store/Recipes/actions/recipesActions";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";
import getRecipes from "../../store/Recipes/selectors/getRecipes";
import { IRecipe } from "../../store/Recipes/RecipeTypes";
import Recipe from "../../components/Recipe/Recipe";
import "./Recipes.css";

const Recipes: React.FunctionComponent = () => {
  const [recipeShowed, setRecipeShowed] = React.useState<JSX.Element | string>(
    "Choose a recipe"
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(recipesActions.getRecipes());
  }, [dispatch]);

  const recipeList: any = useSelector(getRecipes);

  const showDetails = (recipeItem: IRecipe) => {
    setRecipeShowed(<RecipeDetails {...recipeItem} />);
  };

  const recipes: JSX.Element[] = Object.keys(recipeList).map((id: string) => {
    return (
      <Recipe
        key={id}
        {...recipeList[id]}
        className="item"
        onClickHandler={() => showDetails(recipeList[id])}
      />
    );
  });

  return (
    <div style={{ display: "flex" }}>
      <div> {recipes} </div>
      <div style={{ display: "flex" }}>{recipeShowed}</div>
    </div>
  );
};

export default Recipes;
