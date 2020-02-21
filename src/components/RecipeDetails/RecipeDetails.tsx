import * as React from "react";

import Recipe from "../Recipe/Recipe";
import "./RecipeDetails.css";

export interface Props {
  name: string;
  image: string;
  ingredients: IIngridients;
}

export type IIngridients = {
  [key: string]: string;
};

const RecipeDetails: React.FunctionComponent<Props> = ({
  name,
  image,
  ingredients
}) => {
  let ingredientsList = null;

  if (ingredients) {
    ingredientsList = Object.keys(ingredients).map((key: string) => (
      <li key={key}>
        {key} {ingredients[key]}
      </li>
    ));
  }

  return (
    <div style={{ display: "flex" }}>
      <div>
        <Recipe name={name} image={image} className="recipe-detail" />
      </div>
      <div>
        <ul className="ingredients">{ingredientsList}</ul>
      </div>
    </div>
  );
};
export default RecipeDetails;
