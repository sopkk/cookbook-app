import * as React from "react";

interface Props {
  type: string;
  onClickHandler?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  name: string;
  className: string;
}

const Button: React.FunctionComponent<Props> = ({
  type,
  children,
  name,
  className,
  onClickHandler
}) => {
  switch (type) {
    case "submit":
      return (
        <div>
          <button
            type="submit"
            className={className}
            title={name}
            onClick={onClickHandler}
          >
            {children}
          </button>
        </div>
      );
    case "button":
      return (
        <div>
          <button
            type="button"
            className={className}
            title={name}
            onClick={onClickHandler}
          >
            {children}
          </button>
        </div>
      );
    default:
      return (
        <div>
          <button
            type="button"
            className={className}
            title={name}
            onClick={onClickHandler}
          >
            {children}
          </button>
        </div>
      );
  }
};

export default Button;
