import * as React from "react";
import "./Recipe.css";

//const DEFAULT_IMAGE_PATH = "../../assets/images/recipe.jpg";

interface Props {
  name: string;
  image: string;
  className: string;
  onClickHandler?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}

const Recipe: React.FunctionComponent<Props> = ({
  name,
  image,
  className,
  onClickHandler
}) => (
  <div className={className} onClick={onClickHandler}>
    <img src={image} alt={name} />
    <span>{name}</span>
  </div>
);
export default Recipe;
