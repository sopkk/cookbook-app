import { IIngridients } from "../RecipeDetails/RecipeDetails";

export interface IRecipeList {
  [key: string]: IRecipe;
}

export interface IRecipe {
  name: string;
  image: string;
  ingredients: IIngridients;
}

const RecipeList: IRecipeList = {
  recipe1: {
    name: "Pizza",
    image:
      "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=",
    ingredients: { tomato: "1", cheese: "2" }
  },
  recipe2: {
    name: "Pancakes",
    image:
      "https://itslivb.com/wp-content/uploads/2019/01/Vegan-Buttermilk-Pancakes.png",
    ingredients: { eggs: "1", flour: "2" }
  },
  recipe3: {
    name: "Pasta",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/190130-pasta-puttanesca-horizontal-1549421254.png",
    ingredients: { pasta: "1", meat: "2" }
  }
};

export default RecipeList;
