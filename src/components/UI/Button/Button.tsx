import * as React from "react";

import "./Button.css";

interface Props {
  onClickHandler?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  name: string;
}

const Button: React.FunctionComponent<Props> = ({ children, name }) => {
  return (
    <div>
      <button type="button" className="button-add-recipe" title={name}>
        {children}
      </button>
    </div>
  );
};

export default Button;
