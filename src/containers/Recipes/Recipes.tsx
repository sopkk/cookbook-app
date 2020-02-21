import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as recipesActions from "../../store/Recipes/actions/recipesActions";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";
import getRecipes from "../../store/Recipes/selectors/getRecipes";
import { IRecipe } from "../../store/Recipes/RecipeTypes";
import Recipe from "../../components/Recipe/Recipe";
import Button from "../../components/UI/Button/Button";
import Modal, { ModalType } from "../../components/UI/Modal/Modal";
import "./Recipes.css";

const Recipes: React.FunctionComponent = () => {
  const [recipeShowed, setRecipeShowed] = React.useState<JSX.Element | string>(
    "Choose a recipe"
  );

  const [recipeModal, setRecipeModal] = React.useState<JSX.Element | null>(
    null
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

  const closeModalHandler = () => {
    setRecipeModal(null);
  };

  const recipeAddedHandler = (recipe: IRecipe) => {
    console.log("recept pre dispatcha: ", recipe);
    dispatch(recipesActions.addRecipe(recipe));
    setRecipeModal(null);
  };

  const addNewRecipeHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setRecipeModal(
      <Modal
        className="modal-add-new-recipe"
        type={ModalType.Add}
        onCloseHandler={closeModalHandler}
        onRecipeAddedHandler={recipeAddedHandler}
      />
    );
  };

  return (
    <div>
      <Button
        type="submit"
        name="add-recipe"
        className="add-recipe"
        onClickHandler={addNewRecipeHandler}
      >
        Add new recipe
      </Button>
      {recipeModal}
      <div style={{ display: "flex" }}>
        <div> {recipes} </div>
        <div style={{ display: "flex" }}>{recipeShowed}</div>
      </div>
    </div>
  );
};

export default Recipes;
