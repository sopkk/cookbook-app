import * as React from "react";

import NavigationItem from "../NavigationItem/NavigationItem";
import "./Toolbar.css";

const NAVIGATION_ITEMS: string[] = ["Home", "Recipes"];

const Toolbar: React.FunctionComponent = () => {
  const navigationItems: JSX.Element[] = NAVIGATION_ITEMS.map(
    (item: string) => {
      return <NavigationItem key={item} name={item} />;
    }
  );

  return (
    <div>
      <nav>
        <button className="button-menu"> 🞬 </button>
        <ul className="toolbar">{navigationItems}</ul>
      </nav>
    </div>
  );
};
export default Toolbar;
