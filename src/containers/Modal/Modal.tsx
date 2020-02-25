import * as React from "react";

import { IIngridients } from "../../components/RecipeDetails/RecipeDetails";
import { IRecipe } from "../../store/Recipes/RecipeTypes";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import "./Modal.css";

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
    if (ingredient.trim() !== "") {
      const updatedIngredients: IIngridients = {
        ...recipe.ingredients,
        [ingredient]: "1"
      };
      const updatedRecipe: IRecipe = {
        ...recipe,
        ingredients: updatedIngredients
      };
      setRecipe(updatedRecipe);
      setIngredient("");
    } else {
      alert("add ingredient name");
    }
  };

  const onClickIngredient = (key: string) => () => {
    setRecipe(prevState => {
      const newRecipe: IRecipe = { ...prevState };
      delete newRecipe.ingredients[key];
      return newRecipe;
    });
  };

  const ingredientsList = Object.keys(recipe.ingredients).map((key: string) => (
    <div key={key} style={{ display: "flex" }}>
      <li className="li-ingredients" onClick={onClickIngredient(key)}>
        {key}: {recipe.ingredients[key]}
      </li>
    </div>
  ));

  let modalContent = null;
  switch (type) {
    case ModalType.Add:
      modalContent = (
        <div className="new-recipe-title">
          <div style={{ display: "flex" }}>
            <h2>New Recipe</h2>
            <Button
              type="button"
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
              value={ingredient}
            />
            <Button
              type="click"
              name="add-ingredient"
              className="button-add-ingredient"
              onClickHandler={onIngridientAddedHandler}
              disabled={false}
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
