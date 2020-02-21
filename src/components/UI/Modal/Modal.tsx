import * as React from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Modal.css";
import { IRecipe } from "../../../store/Recipes/RecipeTypes";
import { IIngridients } from "../../../components/RecipeDetails/RecipeDetails";

interface Props {
  type: ModalType;
  onCloseHandler: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onRecipeAddedHandler: (recipe: IRecipe) => void;
  className: string;
}

export enum ModalType {
  Add = "add",
  Edit = "edit"
}

const Modal: React.FunctionComponent<Props> = ({
  type,
  onCloseHandler,
  onRecipeAddedHandler: onAddedHandler,
  className
}) => {
  const [recipe, setRecipe] = React.useState<IRecipe>({
    name: "",
    image: "",
    ingredients: {}
  });

  const [ingredient, setIngredient] = React.useState<string>("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedRecipe: IRecipe = {
      ...recipe,
      [event.target.name]: event.target.value
    };
    setRecipe(updatedRecipe);
  };

  const onClickHandler = () => {
    onAddedHandler(recipe);
  };

  const onIngredientChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedIngredient: string = event.target.value;
    setIngredient(updatedIngredient);
  };

  const onIngridientAddedHandler = () => {
    const updatedIngredients: IIngridients = {
      ...recipe.ingredients,
      [ingredient]: "1"
    };
    const updatedRecipe: IRecipe = {
      ...recipe,
      ingredients: updatedIngredients
    };
    setRecipe(updatedRecipe);
  };

  const ingredientsList = Object.keys(recipe.ingredients).map((key: string) => (
    <li key={key}>
      {key}: {recipe.ingredients[key]}
    </li>
  ));

  let modalContent = null;
  switch (type) {
    case ModalType.Add:
      modalContent = (
        <div className="new-recipe-title">
          <div style={{ display: "flex" }}>
            <h2>New Recipe</h2>
            <Button
              type="submit"
              name="button-add-new-recipe"
              className="button-add-new-recipe"
              onClickHandler={onClickHandler}
            >
              Add
            </Button>
          </div>
          <Input
            type="text"
            name="name"
            label="Recipe name"
            placeholder="recipe name"
            handleChange={onChangeHandler}
          />
          <Input
            type="text"
            name="image"
            label="Recipe photo url"
            placeholder="recipe photo"
            handleChange={onChangeHandler}
          />
          <br />
          <div style={{ display: "flex" }}>
            <Input
              type="text"
              name="ingredient"
              label="Add an ingredient"
              placeholder="ingredient"
              handleChange={onIngredientChangeHandler}
            />
            <Button
              type="click"
              name="add-ingredient"
              className="button-add-ingredient"
              onClickHandler={onIngridientAddedHandler}
            >
              +
            </Button>
          </div>
          <div>{ingredientsList}</div>
        </div>
      );
      break;
    case ModalType.Edit:
      modalContent = "edit";
      break;
    default:
      modalContent = "default";
      break;
  }
  return (
    <div className={className}>
      <Button
        type="button"
        onClickHandler={onCloseHandler}
        name="close"
        className="close-button"
      >
        X
      </Button>
      {modalContent}
    </div>
  );
};
export default Modal;
