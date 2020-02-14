import * as React from "react";
import "./Recipe.css";

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
}) => {
  return (
    <div className={className} onClick={onClickHandler}>
      <img src={image} alt={name} />
      <span>{name}</span>
    </div>
  );
};
export default Recipe;
