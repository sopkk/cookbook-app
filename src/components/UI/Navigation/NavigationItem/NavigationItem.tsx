import * as React from "react";

import "./NavigationItem.css";

interface Props {
  name: string;
}

const NavigationItem: React.FunctionComponent<Props> = ({ name }) => {
  return <li className="toolbar-item">{name}</li>;
};

export default NavigationItem;
