import * as React from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Modal.css";
import { IRecipe } from "../../../store/Recipes/RecipeTypes";

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

  const onChangeHandler = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedRecipe: IRecipe = { ...recipe, [name]: event.target.value };
    setRecipe(updatedRecipe);
  };

  const onClickHandler = () => {
    onAddedHandler(recipe);
  };

  let modalContent = null;
  switch (type) {
    case ModalType.Add:
      modalContent = (
        <div className="new-recipe-title">
          <h2>New Recipe</h2>
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
          <Button
            type="submit"
            name="button-add-new-recipe"
            className="button-add-new-recipe"
            onClickHandler={onClickHandler}
          >
            Add
          </Button>
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
