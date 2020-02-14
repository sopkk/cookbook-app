import * as React from "react";

import RecipeDetails from "../RecipeDetails/RecipeDetails";
import Recipe from "../Recipe/Recipe";
import recipeList, { IRecipe } from "./RecipeList";
import "./Recipes.css";

const Recipes: React.FunctionComponent = () => {
  const [recipeShowed, setRecipeShowed] = React.useState<JSX.Element | string>(
    "Choose a recipe"
  );

  const showDetails = (recipeItem: IRecipe) => {
    setRecipeShowed(<RecipeDetails {...recipeItem} />);
  };

  const recipes: JSX.Element[] = Object.keys(
    recipeList
  ).map((key: keyof typeof recipeList) => (
    <Recipe
      key={key}
      {...recipeList[key]}
      className="item"
      onClickHandler={() => showDetails(recipeList[key])}
    />
  ));

  return (
    <div style={{ display: "flex" }}>
      <div> {recipes} </div>
      <div style={{ display: "flex" }}>{recipeShowed}</div>
    </div>
  );
};

export default Recipes;
