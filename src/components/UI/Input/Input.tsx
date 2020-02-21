import * as React from "react";

export interface Props {
  type: string;
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  handleChange: (
    name: string
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FunctionComponent<Props> = ({
  type,
  name,
  label,
  value,
  placeholder,
  handleChange
}) => {
  return (
    <div>
      <label>{label}</label> <br />
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange(name)}
      />
    </div>
  );
};

export default Input;
